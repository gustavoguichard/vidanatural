import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import NextLink, { LinkProps } from 'next/link'

import { cx } from 'lib/utils'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<LinkProps, 'prefetch' | 'scroll'> & {
    activeClassName?: string
  }
const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ activeClassName, className, href, ...props }, ref) => {
    const router = useRouter()
    const classes = cx(className, router.pathname === href && activeClassName)

    return href && href.startsWith('http') ? (
      <a ref={ref} href={href} className={classes} {...props} />
    ) : (
      <NextLink href={href!}>
        <a ref={ref} className={classes} {...props} />
      </NextLink>
    )
  },
)

Link.displayName = 'Link'

export default Link
