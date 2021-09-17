import useGlobal from 'lib/use-global'

import Message from './message'

const Notifications = () => {
  const [{ notifications }] = useGlobal()

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 z-50 flex flex-col justify-between gap-4 px-4 py-6 pointer-events-none sm:flex"
    >
      <div className="relative flex flex-col items-center gap-4 sm:items-start sm:pr-6 sm:absolute sm:left-4 sm:top-4 sm:w-1/2">
        {notifications
          .filter(({ position }) => position === 'top-left')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="relative flex flex-col items-center gap-4 sm:items-end sm:absolute sm:pl-6 sm:right-4 sm:top-4 sm:w-1/2">
        {notifications
          .filter(({ position }) => position === 'top-right')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="flex-grow" />
      <div className="relative flex flex-col-reverse items-center gap-4 sm:items-start sm:pr-6 sm:absolute sm:left-4 sm:bottom-4 sm:w-1/2">
        {notifications
          .filter(({ position }) => position === 'bottom-left')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="relative flex flex-col-reverse items-center gap-4 sm:items-end sm:absolute sm:pl-6 sm:right-4 sm:bottom-4 sm:w-1/2">
        {notifications
          .filter(({ position }) => position === 'bottom-right')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
    </div>
  )
}

export default Notifications
