import { forwardRef } from 'react'
import { FaAngleRight } from 'react-icons/fa'

import { classes } from 'lib/utils'

import Link from 'components/link'

const CTAButton = (
  {
    href,
    mini,
    children,
    disableIcon,
    primary,
    outlined,
    IconComponent = FaAngleRight,
    className,
    external,
    ...props
  },
  ref,
) => {
  const cx = classes(
    'group tracking-wide transition duration-200 inline-flex relative rounded-sm items-center justify-center focus:outline-none focus:shadow-outline',
    className,
    { 'text-xs p-2': mini, 'p-4': !mini },
    {
      'text-white bg-teal-600': primary && !outlined,
      'text-white bg-gray-900': !primary && !outlined,
      'border-2 border-current font-semibold': outlined,
      'text-teal-300': outlined && primary,
      'hover:bg-opacity-75 hover:shadow-lg': !outlined,
    },
  )

  const Component = href ? (external ? 'a' : Link) : 'button'
  return (
    <Component ref={ref} {...props} href={href} className={cx}>
      {children}
      {disableIcon || (
        <IconComponent className="transition-all duration-200 ml-1 group-hover:ml-2" />
      )}
    </Component>
  )
}

export default forwardRef(CTAButton)
