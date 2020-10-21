import useGlobal from 'lib/use-global'

import Notification from 'components/header/notification'

const Notifications = () => {
  const [{ notifications }] = useGlobal()

  return notifications.map((n) => <Notification key={n.id} notification={n} />)
}

export default Notifications
