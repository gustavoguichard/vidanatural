/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { cx } from 'lib/utils'

function Link({ activeClassName, className, href, ...props }, ref) {
  const router = useRouter()
  const classes = cx(className, router.pathname === href && activeClassName)

  return href.startsWith('http') ? (
    <a ref={ref} href={href} className={classes} {...props} />
  ) : (
    <NextLink href={href}>
      <a ref={ref} className={classes} {...props} />
    </NextLink>
  )
}

export default forwardRef(Link)
