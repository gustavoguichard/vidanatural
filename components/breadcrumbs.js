import { memo } from 'react'
import Link from 'next/link'

import { clipSentence } from 'lib/utils'

const Breadcrumbs = ({ links, children, clip = true, hideHome, ...props }) => {
  const separator = <span className="text-xs mx-1"> &gt; </span>
  return (
    <p
      aria-label="breadcrumb"
      {...props}
      className="text-gray-700 text-sm my-4"
    >
      {hideHome || (
        <Link href="/">
          <a className="underline hover:text-green-600">Vida Natural</a>
        </Link>
      )}
      {hideHome || separator}
      {links &&
        links.map((link, idx) => (
          <>
            <Link key={`link-${idx}`} {...link}>
              <a className="underline hover:text-green-600">{link.title}</a>
            </Link>
            {separator}
          </>
        ))}
      <span>{clip ? clipSentence(children) : children}</span>
    </p>
  )
}

export default memo(Breadcrumbs)
