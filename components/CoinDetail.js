import React from 'react'
import Image from 'next/image'
import Rate from './cmc-table/Rate'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'
import RateFilled from './buttons/RateFilled'
import DropdownBtn from './buttons/DropdownBtn'

const style = {
  coinDetails: `min-h-screen text-white`,
  coinDetailsLink: `flex mt-3 flex-wrap`,
  grayBtn: `mr-3 mb-3 bg-salte-800 px-3 py-1 rounded-xl`,
  borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
  title: `text-gray-400 whitespace-nowrap mr-2`,
  coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
  coinSymbol: `bg-scale-800 flex items-center px-2 roundel-xl`,
  coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex items-start justify-between`,
  flexBetween: `flex justify-between`,
}

const CoinDetail = ({ coinName, coinSymbol, price }) => {
  const coinIcon = () => {
    switch (coinName) {
      case 'Bitcoin':
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Ethereum':
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Tether':
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'BNB':
        return (
          <Image
            src={bnb}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'USD Coin':
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'XRP':
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Cardano':
        return (
          <Image
            src={cardano}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Terra':
        return (
          <Image
            src={tera}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Solana':
        return (
          <Image
            src={solana}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Avalanche':
        return (
          <Image
            src={avalanche}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      default:
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )
    }
  }

  return (
    <main className={style.coinDetails}>
      <div>
        <div className={style.coinDetailsWrapper}>
          <div className='flex flex-col w-fit'>
            <div className='flex items-center'>
              {coinIcon()}
              &nbsp; &nbsp;
              <div>
                <div className='flex'>
                  <p className='text-3xl'>{coinName}</p>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <p className={style.coinSymbol}>{coinSymbol}</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={style.coinDetailsLink}>
              <div className={style.grayBtn}>solana.com</div>
              <div className={style.grayBtn}>Explores</div>
              <div className={style.grayBtn}>Community</div>
              <div className={style.grayBtn}>Chat</div>
              <div className={style.grayBtn}>Source</div>
              <div className={style.grayBtn}>Whitepaper</div>
            </div>
            <br />
            Topics
            <div className={[style.coinDetailsLink, 'topics']}>
              <div className={style.grayBtn}>Mineable</div>
              <div className={style.grayBtn}>PoW</div>
              <div className={style.grayBtn}>SHA-256</div>
              <div className={style.grayBtn}>Store of value</div>
            </div>
          </div>
          <div className='-ml-16'>
            <div className={style.coinRates}>
              <div>
                <p className='text-gray-400'>
                  {coinName} ({coinSymbol})
                </p>
                <div className='flex my-3'>
                  <h1 className='text-4xl'>${price}</h1>
                  <RateFilled />
                </div>
                <div className='flex items-start'>
                  <p className='text-gray-400'>15.26 ETH</p>
                  &nbsp; &nbsp; &nbsp;
                  <Rate isIncrement={false} rate={0.53} />
                </div>
                <div className='flex items-start'>
                  <p className='text-gray-400'>24.33 BTC</p>
                  &nbsp; &nbsp; &nbsp;
                  <Rate isIncrement={true} rate={0.99} />
                </div>
              </div>
              <div className='flex'>
                <DropdownBtn label='Buy' />
                <DropdownBtn label='Exchange' />
                <DropdownBtn label='Gaming' />
                <DropdownBtn label='Earn Crypto' />
              </div>
            </div>
            <div className={style.coinInfo}>
              <div>
                <div>
                  <small className={style.title}>Market Cap</small>
                </div>
                <small>$731,935,983,865</small>
                <Rate isIncrement={true} rate={0.73} />
              </div>
              <div className={style.borderLeft}>
                <div>
                  <small className={style.title}>Fully Diluted Market Cap</small>
                </div>
                <small>$731,935,983,865</small>
                <Rate isIncrement={true} rate={0.73} />
              </div>
              <div className={style.borderLeft}>
                <div>
                  <div>
                    <small className={style.title}>
                      Volume &nbsp;<small className={style.coinSymbol}>BTC</small>
                    </small>
                  </div>
                  <small>$731,935,983,865</small>
                  <Rate isIncrement={true} rate={0.73} />
                </div>
                <br />
                <div>
                  <div>
                    <small className={style.title}>Volume / Market Cap</small>
                  </div>
                  <small>0.03315</small>
                </div>
              </div>
              <div className={style.borderLeft}>
                <div>
                  <div>
                    <small className={style.title}>Circulating Supply</small>
                  </div>
                  <small>$731,935,983,865 BTC</small>
                </div>
                <br />
                <div>
                  <div className={style.flexBetween}>
                    <div>
                      <small className={style.title}>Max Supply</small>
                    </div>
                    <div>
                      <small>$731,935,983</small>
                    </div>
                  </div>
                  <div className={style.flexBetween}>
                    <div>
                      <small className={style.title}>Total Supply</small>
                    </div>
                    <div>
                      <small>$451,935,983</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoinDetail
