import useGlobal from 'lib/use-global'

import Message from 'components/notifications/message'

const Notifications = () => {
  const [{ notifications }] = useGlobal()

  return notifications.map((n) => <Message key={n.id} notification={n} />)
}

export default Notifications
