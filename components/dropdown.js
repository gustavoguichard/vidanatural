import { useRef } from 'react'

import { classes } from 'lib/utils'
import { useOnClickOutside } from 'lib/hooks'

function Dropdown({ children, open, onClose, className, ...props }) {
  const ref = useRef()
  useOnClickOutside(ref, onClose)

  const cx = classes('py-1', className)
  return open ? (
    <div
      ref={ref}
      {...props}
      className="animate__animated animate__faster animate__fadeIn origin-top-right z-10 absolute right-0 mt-2 min-w-max rounded-md shadow-lg"
    >
      <div className="rounded-md bg-white shadow-xs">
        <div
          className={cx}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      </div>
    </div>
  ) : null
}

export default Dropdown
