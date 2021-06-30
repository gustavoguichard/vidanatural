import { useRef } from 'react'

import { classes } from 'lib/utils'
import { useOnClickOutside } from 'lib/hooks'

import Transition from 'components/transition'

function Dropdown({ children, open, onClose, className, ...props }) {
  const ref = useRef()
  useOnClickOutside(ref, onClose)
  return (
    <Transition
      {...props}
      during="transition-all duration-100 ease-in"
      hidden="scale-y-50 scale-x-50 opacity-0"
      shown="opacity-100 scale-y-1 scale-x-1"
      show={open}
      className="origin-top-right z-10 absolute right-0 mt-2 w-72 sm:w-auto sm:min-w-max rounded-md shadow-lg"
    >
      <div
        ref={ref}
        className="rounded-md bg-white ring-1 ring-black ring-opacity-5"
      >
        <div
          className={classes('py-1', className)}
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
