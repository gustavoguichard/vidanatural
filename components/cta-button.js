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
    inverted,
    IconComponent = FaAngleRight,
    className,
    external,
    ...props
  },
  ref,
) => {
  const cx = classes(
    'group tracking-wide transition duration-200 inline-flex relative rounded-sm items-center justify-center hover:bg-opacity-75 hover:shadow-lg focus:outline-none focus:shadow-outline',
    className,
    { 'text-xs p-2': mini, 'p-4': !mini },
    { 'text-gray-900 bg-white': inverted, 'text-white bg-gray-900': !inverted },
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
