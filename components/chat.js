import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

import analytics from 'lib/analytics'
import { cx } from 'lib/utils'

const Chat = ({ className, bg = 'gray-900', shadow = true }) => {
  const track = (service) => () =>
    analytics.track('Contact', { location: 'FloatingButtons', service })
  return (
    <div
      className={cx(
        'grid grid-flow-col gap-2 p-1 rounded-lg',
        className,
        `bg-${bg}`,
        shadow && 'shadow-xl'
      )}
    >
      <a
        onClick={track('Whatsapp')}
        className="inline-block"
        href="https://wa.me/5548991039557"
        title="Fale conosco por whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="#26CC63" size={33} />
      </a>
      <a
        onClick={track('Messenger')}
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
