import { useRef } from 'react'

import { useOnClickOutside } from 'lib/hooks'

function Dropdown({ children, open, onClose }) {
  const ref = useRef()
  useOnClickOutside(ref, onClose)
  return open ? (
    <div
      ref={ref}
      className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg"
    >
      <div className="rounded-md bg-white shadow-xs">
        <div
          className="py-1"
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
