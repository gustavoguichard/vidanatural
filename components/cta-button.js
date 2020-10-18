import { forwardRef } from 'react'
import { FaAngleRight } from 'react-icons/fa'

import { classes } from 'lib/utils'

const CTAButton = (
  {
    children,
    mini,
    disableIcon,
    IconComponent = FaAngleRight,
    onClick = () => null,
    className,
    ...props
  },
  ref,
) => {
  const cx = classes(
    'group tracking-wide transition duration-200 inline-flex relative text-white rounded-sm items-center justify-center hover:bg-opacity-75 hover:shadow-lg bg-gray-900',
    className,
    { 'text-xs p-2': mini, 'p-4': !mini },
  )
  return (
    <button ref={ref} type="button" {...props} onClick={onClick} className={cx}>
      {children}
      {disableIcon || (
        <IconComponent className="transition-all duration-200 ml-1 group-hover:ml-2" />
      )}
    </button>
  )
}

export default forwardRef(CTAButton)
