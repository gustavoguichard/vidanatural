import { memo } from 'react'
import CustomerChat, { Context } from 'utils/CustomerChat'

const chat = new CustomerChat(process.env.FRESHCHAT_TOKEN)

const Layout = ({ children }) => {
  return <Context.Provider value={chat}>{children}</Context.Provider>
}

export default memo(Layout)
