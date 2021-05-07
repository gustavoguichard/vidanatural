import { classes } from 'lib/utils'

import Transition from 'components/transition'

const Drawer = ({ children, className, anchor = 'left', open, onClose }) => (
  <Transition
    onClick={onClose}
    className="z-50 fixed bg-black bg-opacity-25 inset-0"
    enter="transition-opacity duration-200 ease-in"
    leave="delay-200 transition-opacity duration-200 ease-in"
    hidden="opacity-0"
    shown="opacity-100"
    show={open}
  >
    <Transition.Child
      onClick={(ev) => ev.stopPropagation()}
      className={classes(
        className,
        'text-gray-900 bg-white shadow-lg absolute top-0 bottom-0 overflow-y-auto overscroll-contain',
        anchor === 'right' && 'right-0',
        anchor === 'left' && 'left-0',
      )}
      enter="delay-200 transition-all duration-200 ease-out transform"
      leave="transition-all duration-200 ease-in transform"
      hidden={classes(
        anchor === 'right' && 'translate-x-full',
        anchor === 'left' && '-translate-x-full',
      )}
      shown="translate-x-0"
    >
      {children}
    </Transition.Child>
  </Transition>
)

export default Drawer
