import { useEffect, useState } from "react"
import CoinDetail from "../../components/CoinDetail"
import Header from "../../components/Header"

const Price = () => {
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  const getURLData = () => {
    const urlParams = new URLSearchParams(window.location.search)
    setCoinName(urlParams.get('coin') || 'NoCoin')
    setCoinSymbol(urlParams.get('symbol') || 'NoSymbol')
    setPrice(
      urlParams.get('price')
        ? Number(urlParams.get('price').toLocaleString())
        : '0'
    )
  }

  return (
    <div>
      <Header />
      <CoinDetail coinName={coinName} coinSymbol={coinSymbol} price={price} />
    </div>
  )
}

export default Price