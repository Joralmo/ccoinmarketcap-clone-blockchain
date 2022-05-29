import React from 'react'
import ChevronUp from '../../assets/svg/chevronUp'

const style = {
  rateFilled: `bg-green-600 flex items-center px-3 ml-3 rounded-xl`,
}

const RateFilled = () => {
  return (
    <div className={style.rateFilled}>
      <ChevronUp />
      <small className='pl-1'>23.32%</small>
    </div>
  )
}

export default RateFilled
