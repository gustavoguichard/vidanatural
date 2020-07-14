import React from 'react'
import { Container } from '@material-ui/core'

import { classes } from 'lib/utils'
import theme from 'lib/theme'

const PaperContent = ({ children, maxWidth = 'lg', overlap = true }) => {
  const cx = classes(
    'relative z-10 sm:shadow-lg sm:bg-white sm:rounded-lg',
    overlap && 'sm:-mb-4 sm:-mt-20',
  )
  return (
    <Container
      maxWidth={maxWidth}
      css={{ paddingLeft: theme.spacing(5), paddingRight: theme.spacing(5) }}
    >
      <div className={cx}>
        <div className="py-16 sm:my-8 sm:px-10">{children}</div>
      </div>
    </Container>
  )
}

export default PaperContent
