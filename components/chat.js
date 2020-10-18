import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

import { classes } from 'lib/utils'

const Chat = ({ className, bg = 'gray-900', shadow = true }) => {
  const cx = classes(
    'grid grid-flow-col gap-2 p-1 rounded-lg',
    className,
    `bg-${bg}`,
    { 'shadow-xl': shadow },
  )
  return (
    <div className={cx}>
      <a
        className="inline-block"
        href="https://wa.me/5548991039557"
        title="Fale conosco por whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="#26CC63" size={33} />
      </a>
      <a
        className="inline-block"
        href="https://m.me/vidanatural.eco"
        title="Fale conosco no messenger"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookMessenger color="#0080F8" size={33} />
      </a>
    </div>
  )
}

export default Chat
