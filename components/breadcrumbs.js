import { memo } from 'react'
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@material-ui/core'

import { clipSentence } from 'lib/utils'
import theme from 'lib/theme'

import Link from 'components/link'

const Breadcrumbs = ({ links, children, clip = true, hideHome, ...props }) => {
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  }
  return (
    <MuiBreadcrumbs
      separator="›"
      css={{
        color: theme.palette.text.hint,
        fontSize: '0.85rem',
        margin: theme.spacing(2, 0),
      }}
      aria-label="breadcrumb"
      {...props}
    >
      {hideHome || (
        <Link css={linkStyle} href="/">
          Vida Natural
        </Link>
      )}
      {links?.map((link, idx) => (
        <Link key={`link-${idx}`} css={linkStyle} {...link}>
          {link.title}
        </Link>
      ))}
      <Typography color="disabled" css={{ fontSize: 'inherit' }}>
        {clip ? clipSentence(children) : children}
      </Typography>
    </MuiBreadcrumbs>
  )
}

export default memo(Breadcrumbs)
