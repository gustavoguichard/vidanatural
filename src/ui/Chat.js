import { useState } from 'react'
import { Paper } from '@material-ui/core'
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'
import { heartBeat } from 'src/css/animations'
import { Countdown, useToggle } from '@seasonedsoftware/utils'

const Chat = () => {
  const [chatVisible, toggleChat] = useToggle()
  return (
    <>
      <Countdown active time={10} onFinish={toggleChat} />
      {chatVisible && (
        <Paper
          elevation={6}
          css={{
            animation: `${heartBeat} 1s ease-in`,
            bottom: 8,
            display: 'grid',
            gridAutoFlow: 'column',
            gridGap: 5,
            padding: '5px 5px 0px',
            position: 'fixed',
            right: 8,
            zIndex: 1000,
          }}
        >
          <a
            css={{ display: 'inline-block' }}
            href="https://wa.me/5548991039557"
            title="Fale conosco por whatsapp"
            target="_blank"
          >
            <FaWhatsapp color="#26CC63" size={33} />
          </a>
          <a
            css={{ display: 'inline-block' }}
            href="https://m.me/vidanatural.eco"
            title="Fale conosco no messenger"
            target="_blank"
          >
            <FaFacebookMessenger color="#0080F8" size={33} />
          </a>
        </Paper>
      )}
    </>
  )
}
export default Chat
