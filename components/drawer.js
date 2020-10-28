import { classes } from 'lib/utils'

function Drawer({ children, className, anchor = 'left', open, onClose }) {
  const cx = classes(
    'animate__animated animate__faster text-gray-900 bg-white shadow-lg absolute top-0 bottom-0 overflow-y-auto overscroll-contain',
    className,
    {
      'right-0 animate__slideInRight': anchor === 'right',
      'left-0 animate__slideInLeft': anchor === 'left',
    },
  )
  return open ? (
    <div
      onClick={onClose}
      className="z-50 fixed bg-black bg-opacity-25 inset-0"
    >
      <div onClick={(ev) => ev.stopPropagation()} className={cx}>
        {children}
      </div>
    </div>
  ) : null
}

export default Drawer
