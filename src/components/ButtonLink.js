import React from 'react'
import { withRouter } from 'next/router'
import clsx from 'clsx'
import NextLink from 'next/link'
import { Button, IconButton } from '@material-ui/core'

function ButtonLink({
  activeClassName = 'active',
  router,
  className: classNameProps,
  innerRef,
  icon,
  href,
  prefetch,
  ...props
}) {
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName,
  })
  const Component = icon ? IconButton : Button

  return (
    <NextLink href={href} prefetch={prefetch}>
      <Component className={className} ref={innerRef} {...props} />
    </NextLink>
  )
}

ButtonLink.defaultProps = {
  activeClassName: 'active',
}

const RouterButton = withRouter(ButtonLink)

export default React.forwardRef((props, ref) => (
  <RouterButton {...props} innerRef={ref} />
))
