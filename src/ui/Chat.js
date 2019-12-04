import { Paper } from '@material-ui/core'
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

const Chat = props => (
  <Paper
    elevation={6}
    css={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: 5,
      padding: '5px 5px 0px',
    }}
    {...props}
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
)

export default Chat
