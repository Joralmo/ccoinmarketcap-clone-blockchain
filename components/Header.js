import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const style = {
  header: `bg-[#17171A] text-white h-20 flex gap[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
}

const Header = () => {
  return (
    <div className={style.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />

      <div className={style.headerWrapper}>
        <nav className={style.nav}>
          <div className={style.navItem}>
            <div className={style.navItemLink}>Cryptocurrencies</div>
            <div className={style.badge} />
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Exchanges</div>
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>NFT</div>
            <div className={style.badge} />
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Cryptown</div>
            <div className={style.badge} />
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Portfolio</div>
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Watchlist</div>
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Products</div>
            <div className={style.badge} />
          </div>

          <div className={style.navItem}>
            <div className={style.navItemLink}>Learn</div>
          </div>
        </nav>

        <div className='flex items-center'>
          <ConnectButton />
          <div className={style.inputContainer}>
            <Search />
            <input className={style.input} type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
