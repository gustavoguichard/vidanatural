import { cx } from 'lib/utils'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import AlertIcon from 'components/notifications/alert-icon'
import InfoIcon from 'components/notifications/info-icon'
import Countdown from 'components/countdown'
import CloseButton from 'components/close-button'
import Transition from 'components/transition'

const Message = ({ notification }) => {
  const { id, big, type, persist, message, htmlMessage } = notification
  const [shrink, toggle] = useToggle()
  const [visible, toggleVisibility] = useToggle(true)
  const [, { dismissNotification }] = useGlobal()

  const isBig = big && !shrink

  const dismiss = () => dismissNotification(id)
  const onFinish = persist ? toggle : toggleVisibility

  return (
    <Transition
      show={visible}
      appear
      during="transition-all duration-300 ease-out transform"
      leave="transition-all duration-300 ease-in transform"
      hidden="max-h-0 opacity-20"
      shown="max-h-24 opacity-100"
      afterLeave={dismiss}
      className={cx(
        'transition-all duration-500',
        isBig ? 'text-lg' : 'text-sm',
        type === 'info' && 'bg-yellow-100 text-yellow-900',
        type === 'alert' && 'bg-orange-700 text-white',
        type === 'black' && 'bg-gray-800 text-white',
      )}
    >
      <Countdown active time={persist ? 3 : 5} onFinish={onFinish} />
      <div
        className={`max-w-screen-xl mx-auto py-${
          isBig ? 3 : 1
        } px-3 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap`}
      >
        <div className="flex items-center flex-1 w-0">
          {notification.hideIcon || (
            <span className="flex p-2 rounded-lg bg-gray-300/25">
              {type === 'alert' && <AlertIcon isBig={isBig} />}
              {type === 'info' && <InfoIcon isBig={isBig} />}
            </span>
          )}
          <p className="flex flex-grow ml-3 font-medium">
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
        <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
          <CloseButton onClick={toggleVisibility} className="-mr-1 sm:-mr-2" />
        </div>
      </div>
    </Transition>
  )
}

export default Message
