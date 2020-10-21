import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import Countdown from 'components/countdown'

const Notification = () => {
  const [shrink, toggle] = useToggle()
  const [{ notification }, actions] = useGlobal()

  const cx = classes(
    'flex transition-all duration-500 items-center justify-center relative lg:px-8 px-6 text-center',
    {
      'text-lg py-4 bg-orange-700 text-white': !shrink,
      'text-sm py-1 bg-yellow-100 text-yellow-900': shrink,
    },
  )

  return notification ? (
    <div className={cx}>
      <Countdown active time={3} onFinish={toggle} />
      <span dangerouslySetInnerHTML={{ __html: notification }} />
      <button
        type="button"
        title="Fechar"
        onClick={actions.dismissNotification}
        className="font-bold text-lg absolute right-0 mr-3"
      >
        &times;
      </button>
    </div>
  ) : null
}

export default Notification
