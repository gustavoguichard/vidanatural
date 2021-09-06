import { forwardRef } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { cx } from 'lib/utils'

import Link from 'components/link'

const CTAButton = (
  {
    href,
    mini,
    children,
    disableIcon,
    primary,
    outlined,
    IconComponent = FiChevronRight,
    className,
    external,
    ...props
  },
  ref
) => {
  const classes = cx(
    'group tracking-wide transition duration-200 inline-flex relative rounded-sm items-center justify-center focus:outline-none focus:ring',
    className,
    mini ? 'text-xs p-2 px-3' : 'p-4',
    outlined
      ? 'border-2 border-current font-semibold'
      : 'hover:bg-opacity-75 hover:shadow-lg',
    primary && (outlined ? 'text-teal-300' : 'text-white bg-teal-600'),
    primary || outlined || 'text-white bg-gray-900'
  )

  const Component = href ? (external ? 'a' : Link) : 'button'
  return (
    <Component
      type={href ? undefined : 'submit'}
      ref={ref}
      {...props}
      href={href}
      className={classes}
    >
      {children}
      {disableIcon || (
        <IconComponent
          className={cx(
            'transition-all duration-200 ml-1 group-hover:ml-2',
            mini || '-mb-px'
          )}
        />
      )}
    </Component>
  )
}

export default forwardRef(CTAButton)
