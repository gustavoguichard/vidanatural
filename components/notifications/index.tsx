import useGlobal from 'lib/use-global'

import Message from 'components/notifications/message'

const Notifications = () => {
  const [{ notifications }] = useGlobal()

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 z-50 flex flex-col justify-between grid-cols-1 grid-rows-2 gap-4 px-4 py-6 pointer-events-none sm:grid sm:grid-cols-2 sm:p-6 sm:items-start"
    >
      <div className="relative flex flex-col items-start w-full gap-4 sm:h-full">
        {notifications
          .filter(({ position }) => position === 'top-left' || !position)
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="relative flex flex-col items-end w-full gap-4 sm:h-full">
        {notifications
          .filter(({ position }) => position === 'top-right')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="flex-grow sm:hidden" />
      <div className="relative flex flex-col-reverse items-start w-full gap-4 sm:h-full">
        {notifications
          .filter(({ position }) => position === 'bottom-left')
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="relative flex flex-col-reverse items-end w-full gap-4 sm:h-full">
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
