import React from 'react'
import Router, { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import NextLink from 'next/link'
import { Button } from '@material-ui/core'

function ButtonLink({
  activeClassName = 'active',
  router,
  className: classNameProps,
  innerRef,
  href,
  ...props
}) {
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName,
  })

  return (
    <NextLink href={href}>
      <Button className={className} ref={innerRef} {...props} />
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
