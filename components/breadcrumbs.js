import { memo } from 'react'

import { cx } from 'lib/utils'

import Link from 'components/link'

const Breadcrumbs = ({
  links,
  children,
  className,
  clip = true,
  separator = <span className="text-xs mx-1"> &gt; </span>,
  hideHome,
  size = 'sm',
  ...props
}) => (
  <p
    aria-label="breadcrumb"
    {...props}
    className={cx(
      className,
      `text-gray-700 my-4 text-${size}`,
      clip && 'truncate',
    )}
  >
    {hideHome || (
      <Link href="/" className="underline hover:text-teal-600">
        Vida Natural
      </Link>
    )}
    {links &&
      links.map(({ raw, ...link }, idx) => {
        const Component = raw ? 'a' : Link
        return (
          <span key={`link-${idx}`}>
            {(idx !== 0 || !hideHome) && separator}
            <Component {...link} className="underline hover:text-teal-600">
              {link.title}
            </Component>
          </span>
        )
      })}
    {children && separator}
    {children}
  </p>
)

export default memo(Breadcrumbs)
