/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withRouter } from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
}

function Link({
  activeClassName,
  router,
  className: classNameProps,
  innerRef,
  naked,
  color = 'secondary',
  ...props
}) {
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  })

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...props} />
  }

  return (
    <MuiLink
      color={color}
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...props}
    />
  )
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

Link.defaultProps = {
  activeClassName: 'active',
}

const RouterLink = withRouter(Link)

export default React.forwardRef((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
))
