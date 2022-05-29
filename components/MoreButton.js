import React from 'react'
import RightArrow from '../assets/svg/rightArrow'

const style = {
  button: `text-[#6188FF] flex items-center cursor-pointer whitespace-no-wrap justify-between`,

}

const MoreButton = () => {
  return (
    <div className={style.button}>
      Mode <RightArrow />
    </div>
  )
}

export default MoreButton