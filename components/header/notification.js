import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import Countdown from 'components/countdown'
import CloseButton from 'components/close-button'

const Notification = ({ notification }) => {
  const [shrink, toggle] = useToggle()
  const [, { dismissNotification }] = useGlobal()

  const isBig = notification.big && !shrink

  const cx = classes('transition-all duration-500', {
    'text-lg': isBig,
    'text-sm': !isBig,
    'bg-yellow-100 text-yellow-900': notification.type === 'info',
    'bg-orange-700 text-white': notification.type === 'alert',
  })

  const shouldPersist = notification?.persist

  const dismiss = () => dismissNotification(notification)
  const onFinish = shouldPersist ? toggle : dismiss

  return (
    <div className={cx}>
      <Countdown active time={shouldPersist ? 3 : 5} onFinish={onFinish} />
      <div
        className={`max-w-screen-xl mx-auto py-${
          isBig ? 3 : 1
        } px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap`}
      >
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2 rounded-lg bg-gray-300 bg-opacity-25">
            <svg
              className={isBig ? 'h-6 w-6' : 'h-4 w-4'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          <p className="ml-3 font-medium">
            {notification.htmlMessage ? (
              <span
                dangerouslySetInnerHTML={{ __html: notification.htmlMessage }}
              />
            ) : (
              notification.message
            )}
          </p>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <CloseButton onClick={dismiss} className="-mr-1 sm:-mr-2" />
        </div>
      </div>
    </div>
  )
}

export default Notification
