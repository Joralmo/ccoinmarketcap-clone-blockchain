import React, { useState, useEffect, useContext } from 'react'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'
import shiba from '../assets/shiba.png'
import Image from 'next/image'
import Button from './Button'
import ChatCard from './ChatCard'

const style = {
  bullish: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
  bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
  bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943] border border-red-600 h-min px-2 rounded-lg`,
  input: `w-full bg-[#323546] p-4 outline-none rounded-xl`,
  chatContainer: `p-5 bg-[#222531] rounded-xl max-h-ful`,
  flexBetween: `flex justify-between`,
  flexCenter: `flex justify-center items-center`,
  chat: `max-w-lg min-w-full`,
  postButtonContainer: `flex align-center justify-end`,
  boldText: `font-bold`,
  activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
  activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
}

const Chat = () => {
  const [message, setMessage] = useState('')
  const [bullishValue, setBullishValue] = useState(true)

  const sendMessage = () => {}

  return (
    <>
      <div className={style.chat}>
        <div className={style.flexBetween}>
          <p className={style.boldText}>Live Shiba Inu Chat</p>
          <p className="text-[#6188FF]">See more</p>
        </div>
        <br />
        <div className={style.chatContainer}>
          <div className={style.flexBetween}>
            <div className={style.flexCenter}>
              <div>
                <Image src={shiba} width={70} height={70} />
              </div>
              <div className="mr-10 text-left">
                <b>JoralmoPro</b>
                <p className="text-gray-400">@JoralmoPro</p>
              </div>
            </div>
            <div className={style.flexCenter}>
              <div
                className={
                  !bullishValue ? style.bullishLabel : style.activeBullishLabel
                }
                onClick={() => setBullishValue(true)}
              >
                <ChevronUp fill="#17C784" />
                <small className="ml-1">Bullish</small>
              </div>
              &nbsp; &nbsp;
              <div
                className={
                  bullishValue ? style.bearishLabel : style.activeBearishLabel
                }
                onClick={() => setBullishValue(false)}
              >
                <ChevronDown fill="#a52b2b" />
                <small className="ml-1">Bearish</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="text flex items-center text-green-600">
          <ChevronUp fill="#22bc64" />
          <small className="ml-1">Bullish</small>
        </div>
        &nbsp; &nbsp;
        <div className="text flex items-center text-red-500">
          <ChevronUp fill="#a52b2b" />
          <small className="ml-1">Bearish</small>
        </div>
      </div>
      <input
        className={style.input}
        placeholder="What´s happening on BTC?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={style.postButtonContainer}>
        <Button label="Post" onPress={sendMessage} />
      </div>
      <ChatCard />
    </>
  )
}

export default Chat
