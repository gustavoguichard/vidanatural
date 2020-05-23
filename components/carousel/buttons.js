import React from 'react'
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

export const PageBt = ({ onClick, Icon, ...props }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <IconButton
      {...props}
      role="button"
      css={{ position: 'absolute', display: isMobile ? 'none' : 'block' }}
      onClick={onClick}
    >
      <Icon color="primary" fontSize="large" />
    </IconButton>
  )
}

export const PrevBt = ({ onClick }) => (
  <PageBt
    css={{ left: -80 }}
    className="prev-bt"
    onClick={onClick}
    Icon={KeyboardArrowLeft}
  />
)

export const NextBt = ({ onClick }) => (
  <PageBt
    css={{ right: -80 }}
    className="next-bt"
    onClick={onClick}
    Icon={KeyboardArrowRight}
  />
)
