import React, { useState, useContext, useEffect, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CMCTableHeader'
import CMCTableRow from './CMCTableRow'
const CMCTable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext)
  const [coinData, setCoinData] = useState([])

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      const apiResponse = await getTopTenCoins()
      const filteredResponse = apiResponse.filter((coin) => coin.cmc_rank <= 10)
      setCoinData(filteredResponse.length ? filteredResponse : apiResponse)
    } catch (error) {
      console.error(error.message)
    }
  }, [getTopTenCoins])
  // console.log(coinData)
  return (
    <div className="font-bold text-white">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCTableHeader />
          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCTableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIsIncrement={coin.quote.USD.percent_change_24h > 0}
                  dRateIsIncrement={coin.quote.USD.percent_change_7d > 0}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              )
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  )
}

export default CMCTable
