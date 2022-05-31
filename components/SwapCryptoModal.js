import React, { useContext } from 'react'
import { CoinMarketContext } from '../context/context'

const style = {
  modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
  modalContent: `bg-white rounded-lg p-3 w-max w-1/3`,
  input: `w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-node`,
  button: `bg-[#6188FF] p-2 px-5 rounded-lg text-white hover:opacity-50`,
  label: `font-bold text-3xl`,
  closeModalButton: `hover:text-red-300 text-gray-600 cursor-pointer`,
}

const SwapCryptoModal = () => {
  const {
    openBuyCryptoModal,
    setOpenBuyCryptoModal,
    mint,
    coins,
    loadingCoins,
    amount,
    setAmount,
    fromToken,
    setFromToken,
    toToken,
    setToToken,
  } = useContext(CoinMarketContext)

  return (
    openBuyCryptoModal && (
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className="flex items-center justify-between">
            <p className={style.label}>Swap your crypto</p>
            <p
              className={style.closeModalButton}
              onClick={() => {
                setOpenBuyCryptoModal(false)
                setAmount(0)
                setFromToken('')
                setToToken('')
              }}
            >
              close &times;
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="fromToken" className="mb-2 ml-2 block">
              From
            </label>
            <select
              name="fromToken"
              className={style.input}
              placeholder="Select your token"
              onChange={(e) => setFromToken(e.target.value)}
              value={fromToken}
            >
              {!loadingCoins && coins.map((coin) => {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              })}
              <option value="ETH">ETH</option>
            </select>
            <label htmlFor="toToken" className="mb-2 ml-2 block">
              To
            </label>
            <select
              name="toToken"
              className={style.input}
              placeholder="Token to swap"
              onChange={(e) => setToToken(e.target.value)}
              value={toToken}
            >
              {!loadingCoins && coins.map((coin) => {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              })}
            </select>
            <label htmlFor="amount" className="mb-2 ml-2 block">
              Amount
            </label>
            <input
              name='amount'
              className={style.input}
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className={style.button} onClick={mint}>¡Swap!</button>
          </div>
        </div>
      </div>
    )
  )
}

export default SwapCryptoModal
