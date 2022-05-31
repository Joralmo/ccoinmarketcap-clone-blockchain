import { createContext, useEffect, useState } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import {
  dogeAbi,
  linkAbi,
  daiAbi,
  usdcAbi,
  dogeAddress,
  linkAddress,
  daiAddress,
  usdcAddress,
} from '../lib/constants'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis()

  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery('Coins')

  const [currentAccount, setCurrentAccount] = useState('')
  const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
  const [fromToken, setFromToken] = useState('ETH')
  const [toToken, setToToken] = useState('Dai')
  const [amount, setAmount] = useState('3')

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get('ethAddress')
      setCurrentAccount(account)
    }
  }, [isAuthenticated])

  const getContractAddress = () => {
    
    switch (fromToken) {
      case 'Dogecoin':
        return dogeAddress
      case 'Link':
        return linkAddress
      case 'Dai':
        return daiAddress
      case 'Usdc':
        return usdcAddress
      default:
        return ''
    }
  }

  const getToAddress = () => {
    switch (toToken) {
      case 'Dogecoin':
        return dogeAddress
      case 'Link':
        return linkAddress
      case 'Dai':
        return daiAddress
      case 'Usdc':
        return usdcAddress
      default:
        return ''
    }
  }

  const getToAbi = () => {
    switch (toToken) {
      case 'Dogecoin':
        return dogeAbi
      case 'Link':
        return linkAbi
      case 'Dai':
        return daiAbi
      case 'Usdc':
        return usdcAbi
      default:
        return ''
    }
  }

  const mint = async () => {
    try {
      if (fromToken === 'ETH') {
        if (!isAuthenticated) return alert('You need to be logged in')
        await Moralis.enableWeb3()
        const contractAddress = getToAddress()
        const abi = getToAbi()

        let options = {
          contractAddress,
          functionName: 'mint',
          abi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        }
        sendEth()
        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait(4)
        console.log(receipt)
      } else {
        swapTokens()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const swapTokens = async () => {
    try {
      if (!isAuthenticated) return alert('You need to be logged in')
      await Moralis.enableWeb3()

      if (fromToken === toToken) return alert('You cannot swap the same token')

      const fromOptions = {
        type: 'erc20',
        amount: Moralis.Units.Token(amount, '18'),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      }

      const toMintOptions = {
        contractAddress: getToAddress(),
        functionName: 'mint',
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, '18'),
        },
      }

      const fromTransaction = await Moralis.transfer(fromOptions)
      const toMintTransaction = await Moralis.executeFunction(toMintOptions)
      const fromReceipt = await fromTransaction.wait()
      const toReceipt = await toMintTransaction.wait()
      console.log(fromReceipt)
      console.log(toReceipt)
    } catch (error) {
      console.error(error)
    }
  }

  const sendEth = async () => {
    if (!isAuthenticated) return alert('You need to be logged in')
    const contractAddress = getToAddress()

    let options = {
      type: 'native',
      amount: Moralis.Units.ETH('0.01'),
      receiver: contractAddress,
    }
    console.log(options)
    // Temporalmente comentado por qué estaba dando error
    // const transaction = await Moralis.transfer(options); return;
    // const receipt = await transaction.wait()
    // console.log(receipt)
    // Temporalmente comentado por qué estaba dando error
    return {};
  }

  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (error) {
      console.error(error.message)
    }
  }

  const openModal = () => {
    setOpenBuyCryptoModal(true)
  }

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        fromToken,
        toToken,
        setFromToken,
        setToToken,
        amount,
        setAmount,
        mint,
        openModal,
        coins,
        loadingCoins
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
