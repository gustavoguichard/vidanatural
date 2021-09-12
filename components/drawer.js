import { cx } from 'lib/utils'

import Transition from 'components/transition'

const Drawer = ({ children, className, anchor = 'left', open, onClose }) => (
  <Transition
    onClick={onClose}
    className="fixed inset-0 z-50 bg-black/30"
    enter="transition-all duration-200 ease-in"
    leave="delay-200 transition-all duration-200 ease-in"
    hidden="opacity-0"
    shown="opacity-100"
    show={open}
  >
    <Transition.Child
      onClick={(ev) => ev.stopPropagation()}
      className={cx(
        className,
        'text-gray-900 bg-white shadow-lg absolute top-0 bottom-0 overflow-y-auto overscroll-contain',
        anchor === 'right' ? 'right-0' : 'left-0',
      )}
      enter="delay-200 transition-all duration-200 ease-out"
      leave="transition-all duration-200 ease-in"
      hidden={cx(anchor === 'right' ? 'translate-x-full' : '-translate-x-full')}
      shown="translate-x-0"
    >
      {children}
    </Transition.Child>
  </Transition>
)

export default Drawer
