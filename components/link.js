/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { classes } from 'lib/utils'

function Link({ activeClassName, className, href, as, ...props }, ref) {
  const router = useRouter()
  const cx = classes(className, {
    [activeClassName]: router.pathname === href && activeClassName,
  })

  return href.startsWith('http') ? (
    <a ref={ref} href={href} className={cx} {...props} />
  ) : (
    <NextLink href={href} as={as}>
      <a ref={ref} className={cx} {...props} />
    </NextLink>
  )
}

export default forwardRef(Link)
