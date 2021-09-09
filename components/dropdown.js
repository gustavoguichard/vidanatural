import { useRef } from 'react'

import { cx } from 'lib/utils'
import { useOnClickOutside } from 'lib/hooks'

import Transition from 'components/transition'

function Dropdown({ children, open, onClose, className, ...props }) {
  const ref = useRef()
  useOnClickOutside(ref, onClose)
  return (
    <Transition
      {...props}
      during="transition-all duration-100 transform ease-in"
      hidden="scale-y-50 scale-x-50 opacity-0"
      shown="opacity-100 scale-y-1 scale-x-1"
      show={open}
      className="absolute right-0 z-10 mt-2 origin-top-right rounded-md shadow-lg w-72 sm:w-auto sm:min-w-max"
    >
      <div ref={ref} className="bg-white rounded-md ring-1 ring-black/5">
        <div
          className={cx('py-1', className)}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      </div>
    </Transition>
  )
}

export default Dropdown
