import { createContext, useReducer } from 'react'
import Gun from 'gun'

const gun = Gun([process.env.GUN_URL_NODE])

export const GunContext = createContext()

const initialState = {
  messages: [],
}

const reducer = (state, action) => {
  try {
    switch (action.type) {
      case 'clear':
        return { messages: [] }
      case 'add':
        return { messages: [...state.messages, action.data] }
    }
  } catch (error) {
    console.error(error)
  }
}

export const GunProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getMessages = (_name) => {
    const messagesRef = gun.get(_name)

    messagesRef.map().once((message) => {
      dispatch({
        type: 'add',
        data: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createAt: message.createAt,
          messageId: message.messageId,
          isBullish: message.isBullish,
        },
      })
    })
  }
  return (
    <GunContext.Provider value={{ gun, getMessages, state }}>
      {children}
    </GunContext.Provider>
  )
}
