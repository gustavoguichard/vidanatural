import { createContext } from 'react'

export const Context = createContext()

export default class CustomerChat {
  constructor(token) {
    this.onWindowLoad(() => {
      this.chat = window.fcWidget
      if (this.chat) {
        this.chat.init({
          token,
          locale: 'pt-BR',
          host: 'https://wchat.freshchat.com',
        })
      }
    })
  }

  initConversation = (replyText = 'Olá, ') => {
    this.chat && this.chat.open({ replyText })
  }

  onWindowLoad = callback => {
    if (process.browser) {
      if (window.onload) {
        const currOnload = window.onload
        const newOnload = function(evt) {
          currOnload(evt)
          callback(evt)
        }
        window.onload = newOnload
      } else {
        window.onload = callback
      }
    }
  }
}
