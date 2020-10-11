import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Button, IconButton } from '@material-ui/core'

import { classes } from 'lib/utils'

function ButtonLink({
  activeClassName = 'active',
  className: classNameProps,
  innerRef,
  icon,
  href,
  as,
  prefetch,
  ...props
}) {
  const router = useRouter()
  const className = classes(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName,
  })
  const Component = icon ? IconButton : Button

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <Component className={className} ref={innerRef} {...props} />
    </NextLink>
  )
}

ButtonLink.defaultProps = {
  activeClassName: 'active',
}

export default React.forwardRef((props, ref) => (
  <ButtonLink {...props} innerRef={ref} />
))
