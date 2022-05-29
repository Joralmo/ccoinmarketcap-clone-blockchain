import React from 'react'
import Rate from './cmc-table/Rate'
import Image from 'next/image'

const style = {
  trendingCardRow: `flex item-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, symbol, name, icon, isIncrement, rate }) => {
  return (
    <div className={style.trendingCardRow}>
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          { icon && <Image src={icon} width={20} height={20} alt='icon' />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow