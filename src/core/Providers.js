// import CustomerChat, { Context } from 'utils/CustomerChat'

// const chat = new CustomerChat(process.env.FRESHCHAT_TOKEN)

const Proviers = ({ children }) => {
  // return <Context.Provider value={chat}>{children}</Context.Provider>
  return children
}

export default Proviers
