import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import Countdown from 'components/countdown'

const Notification = ({ notification }) => {
  const [shrink, toggle] = useToggle()
  const [, { dismissNotification }] = useGlobal()

  const cx = classes(
    'flex transition-all duration-500 items-center justify-center relative lg:px-8 px-6 text-center',
    {
      'text-lg py-4 bg-orange-700 text-white': !shrink,
      'text-sm py-1 bg-yellow-100 text-yellow-900': shrink,
    },
  )

  const shouldPersist = notification?.persist

  const dismiss = () => dismissNotification(notification)
  const onFinish = shouldPersist ? toggle : dismiss

  return (
    <div className={cx}>
      <Countdown active time={shouldPersist ? 3 : 5} onFinish={onFinish} />
      {notification.htmlMessage ? (
        <span dangerouslySetInnerHTML={{ __html: notification.htmlMessage }} />
      ) : (
        notification.message
      )}
      <button
        type="button"
        title="Fechar"
        onClick={dismiss}
        className="font-bold text-lg absolute right-0 mr-3"
      >
        &times;
      </button>
    </div>
  )
}

export default Notification
