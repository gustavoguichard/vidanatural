import useGlobal from 'lib/use-global'

import Message from 'components/notifications/message'

const Notifications = () => {
  const [{ notifications }] = useGlobal()

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 z-50 flex flex-col justify-between px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div className="relative flex flex-col items-center w-full space-y-4 sm:items-end">
        {notifications
          .filter(({ position }) => position?.includes('top') || !position)
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
      <div className="relative flex flex-col items-center w-full space-y-4 sm:items-end">
        {notifications
          .filter(({ position }) => position?.includes('bottom'))
          .map((n) => (
            <Message key={n.id} notification={n} />
          ))}
      </div>
    </div>
  )
}

export default Notifications
