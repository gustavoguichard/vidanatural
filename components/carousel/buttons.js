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
      color="secondary"
      css={{
        color: 'white',
        position: 'absolute',
        display: isMobile ? 'none' : 'block',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <Icon css={{ color: theme.palette.common.black }} fontSize="large" />
    </IconButton>
  )
}

export const PrevBt = ({ onClick }) => (
  <PageBt
    css={{ left: 20 }}
    className="prev-bt carousel-bt"
    onClick={onClick}
    Icon={KeyboardArrowLeft}
  />
)

export const NextBt = ({ onClick }) => (
  <PageBt
    css={{ right: 20 }}
    className="next-bt carousel-bt"
    onClick={onClick}
    Icon={KeyboardArrowRight}
  />
)
