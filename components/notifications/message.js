import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import AlertIcon from 'components/notifications/alert-icon'
import InfoIcon from 'components/notifications/info-icon'
import Countdown from 'components/countdown'
import CloseButton from 'components/close-button'

const Message = ({ notification }) => {
  const { id, big, type, persist, message, htmlMessage } = notification
  const [shrink, toggle] = useToggle()
  const [, { dismissNotification }] = useGlobal()

  const isBig = big && !shrink

  const cx = classes('transition-all duration-500', {
    'text-lg': isBig,
    'text-sm': !isBig,
    'bg-yellow-100 text-yellow-900': type === 'info',
    'bg-orange-700 text-white': type === 'alert',
    'bg-gray-800 text-white': type === 'black',
  })

  const dismiss = () => dismissNotification(id)
  const onFinish = persist ? toggle : dismiss

  return (
    <div className={cx}>
      <Countdown active time={persist ? 3 : 5} onFinish={onFinish} />
      <div
        className={`max-w-screen-xl mx-auto py-${
          isBig ? 3 : 1
        } px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap`}
      >
        <div className="w-0 flex-1 flex items-center">
          {notification.hideIcon || (
            <span className="flex p-2 rounded-lg bg-gray-300 bg-opacity-25">
              {type === 'alert' && <AlertIcon isBig={isBig} />}
              {type === 'info' && <InfoIcon isBig={isBig} />}
            </span>
          )}
          <p className="ml-3 flex flex-grow font-medium">
            {htmlMessage ? (
              <span
                className="flex flex-grow"
                dangerouslySetInnerHTML={{ __html: htmlMessage }}
              />
            ) : (
              message
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

export default Message
