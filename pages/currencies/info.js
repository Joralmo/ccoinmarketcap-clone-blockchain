import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import solana from '../../assets/solana.png'
import Usd from '../../assets/svg/usd'
import CMCPriceConverter from '../../components/CMCPriceConverter'
import Graph from '../../components/Graph'
import Chat from '../../components/Chat'

const style = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: `flex items-start`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
}

const Currencies = () => {
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
    <div className={style.info}>
      <Header />
      <main className={style.main}>
        <div className={style.flexStart}>
          <div className={style.tabContainerWrapper}>
            <div className={style.flexBetween}>
              <div className={style.tabContainer}>
                <p className={style.activeTab}>Price</p>
                <p className={style.tabItem}>Market Cap</p>
                <p className={style.tabItem}>Trading View</p>
                <p className={style.tabItem}>History</p>
              </div>
              <div className={style.tabContainer}>
                <p className={style.activeTab}>1D</p>
                <p className={style.tabItem}>2D</p>
                <p className={style.tabItem}>1M</p>
                <p className={style.tabItem}>3M</p>
                <p className={style.tabItem}>1Y</p>
                <p className={style.tabItem}>YTD</p>
                <p className={style.tabItem}>ALL</p>
                <p className={style.tabItem}>LOG</p>
              </div>
            </div>
            <br />
            <Graph />
            <br />
            <div className={style.flexBetweenCenter}>
              <div className="flex">
                <div className={style.flexCenter}>
                  <input className="outline-none" type="checkbox" /> &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={style.flexCenter}>
                  <input type="checkbox" /> &nbsp; BTC
                </div>
              </div>
              <p>
                Want more data?{' '}
                <span className="text-[#6188FF]">Check out our API</span>
              </p>
            </div>
            <br />
            <br />
            <CMCPriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              fromLogo={solana}
              toLogo={<Usd />}
              price={price}
              to="United States Dollar"
              toSymbol="USD"
            />
          </div>
          <div className="ml-5 pt-10">
            <Chat />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Currencies
