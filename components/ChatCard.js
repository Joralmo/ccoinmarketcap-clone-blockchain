import React from 'react'
import Shiba from '../assets/shiba.png'
import Comment from '../assets/svg/comment'
import Heart from '../assets/svg/heart'
import MoreHorizontal from '../assets/svg/moreHorizontal'
import Share from '../assets/svg/share'
import Image from 'next/image'
import BullishFilled from './buttons/BullishFilled'
import BearishFilled from './buttons/BearishFilled'

const style = {
  postAction: `flex items-center`,
  chatCard: `border-b border-gray-700 pb-6 mb-6`,
  chatCardWrapper: `flex items-center justify-between`,
  flexCenter: `flex items-center`,
  grayText: `text-gray-400 ml-2`,
  gray400: `text-gray-400`,
  flexBetween: `flex justify-between`,
  messageContent: `my-4 mt-2`,
  labelsContainer: `flex w-full ml-3`,
}

const ChatCard = ({
  content = '',
  timestamp,
  sender,
  bullish,
  senderAvatar,
  likes,
  comments,
}) => {
  return (
    <div className={style.chatCard}>
      <div className={style.chatCardWrapper}>
        <div className={style.flexCenter}>
          <div>
            <Image
              src={senderAvatar || Shiba}
              width={40}
              height={40}
              className="rounded-full"
              alt="avatar"
            />
          </div>
          <div className={style.labelsContainer}>
            {sender}
            &nbsp; • &nbsp;
            <span className={style.grey400}>{timestamp}</span>
            &nbsp; • &nbsp;
            {bullish ? <BullishFilled /> : <BearishFilled />}
          </div>
        </div>
        <MoreHorizontal />
      </div>
      <p className={style.messageContent}>{content}</p>
      <div className={style.flexBetween}>
        <div className={style.postAction}>
          <Comment />
          <p className={style.grayText}>{comments}</p>
        </div>
        <div className={style.postAction}>
          <Heart />
          <p className={style.grayText}>{likes}</p>
        </div>
        <div className={style.postAction}>
          <Share />
          <p className={style.grayText}>Share</p>
        </div>
      </div>
    </div>
  )
}

export default ChatCard
