import { memo } from 'react'

import { clipSentence, classes } from 'lib/utils'

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
}) => {
  const cx = classes(className, 'text-gray-700 my-4', `text-${size}`)
  return (
    <p aria-label="breadcrumb" {...props} className={cx}>
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
      {children && (
        <span>
          {separator}
          {clip ? clipSentence(children) : children}
        </span>
      )}
    </p>
  )
}

export default memo(Breadcrumbs)
