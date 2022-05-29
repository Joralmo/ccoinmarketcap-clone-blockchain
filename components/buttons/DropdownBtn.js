import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'

const style = {
  dropdownBtn: `flex items-center mr-2 rounded-md px-2 bg-blue-700 cursor-pointer`,
}

const DropdownBtn = ({ label }) => {
  return (
    <div className={style.dropdownBtn}>
      <p className="mr-2">{label}</p>
      <ChevronDown />
    </div>
  )
}

export default DropdownBtn
