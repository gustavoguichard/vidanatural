import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

import { classes } from 'lib/utils'

const CTAButton = ({
  children,
  disableIcon,
  IconComponent = FaAngleRight,
  href,
  as,
  className,
  prefetch = true,
  ...props
}) => {
  const cx = classes(
    'group transition duration-200 inline-flex relative text-white rounded-sm items-center justify-center hover:bg-opacity-75 hover:shadow-lg p-4 bg-gray-900',
    className,
  )
  return (
    <Link href={href} as={as} prefetch={prefetch}>
      <a {...props} className={cx}>
        {children}
        {disableIcon || (
          <IconComponent className="transition-all duration-200 ml-1 group-hover:ml-2" />
        )}
      </a>
    </Link>
  )
}

export default CTAButton
