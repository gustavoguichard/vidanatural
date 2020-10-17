import { classes } from 'lib/utils'

function Drawer({ children, anchor = 'left', open, onClose }) {
  const cx = classes(
    'animate__animated animate__faster bg-white shadow-lg absolute top-0 bottom-0 overflow-y-auto',
    {
      'right-0 animate__fadeInRight': anchor === 'right',
      'left-0 animate__fadeInLeft': anchor === 'left',
    },
  )
  return open ? (
    <div
      onClick={onClose}
      className="z-50 fixed bg-black bg-opacity-25 inset-0 overscroll-contain"
    >
      <div onClick={(ev) => ev.stopPropagation()} className={cx}>
        {children}
      </div>
    </div>
  ) : null
}

export default Drawer
