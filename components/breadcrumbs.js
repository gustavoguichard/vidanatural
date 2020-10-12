import { memo, Fragment } from 'react'

import { clipSentence, classes } from 'lib/utils'

import Link from 'components/link'

const Breadcrumbs = ({
  links,
  children,
  className,
  clip = true,
  hideHome,
  ...props
}) => {
  const separator = <span className="text-xs mx-1"> &gt; </span>
  const cx = classes('text-gray-700 text-sm my-4', className)
  return (
    <p aria-label="breadcrumb" {...props} className={cx}>
      {hideHome || (
        <Link href="/" className="underline hover:text-green-600">
          Vida Natural
        </Link>
      )}
      {hideHome || separator}
      {links &&
        links.map((link, idx) => (
          <Fragment key={`link-${idx}`}>
            <Link {...link} className="underline hover:text-green-600">
              {link.title}
            </Link>
            {separator}
          </Fragment>
        ))}
      <span>{clip ? clipSentence(children) : children}</span>
    </p>
  )
}

export default memo(Breadcrumbs)
