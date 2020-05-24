import React from 'react'
import get from 'lodash/get'
import { Container, Box, useMediaQuery } from '@material-ui/core'

import theme from 'lib/theme'

import BackgroundImg from 'components/background-img'

const sizes = { small: '40vh', medium: '65vh', full: '100vh' }

const Hero = ({
  children,
  filter,
  style = {},
  color,
  size = 'medium',
  variant = 'primary',
  textShadow = true,
  maxWidth = 'md',
  background,
  mobileBg,
}) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const defaultColor =
    variant === 'secondary'
      ? theme.palette.secondary.light
      : theme.palette.primary.main
  return (
    <Box
      color={`${variant}.contrastText`}
      position="relative"
      bgcolor={color || defaultColor}
    >
      {background && (
        <BackgroundImg
          alwaysShow
          filter={filter}
          src={isDesktop ? background : mobileBg || background}
        />
      )}
      <Container
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: get(sizes, size),
          paddingBottom: '5rem',
          paddingTop: '8rem',
          position: 'relative',
          textAlign: 'center',
          textShadow: textShadow
            ? '0px 10px 13px rgba(0,0,0,0.2), 0px 20px 31px rgba(0,0,0,0.14), 0px 8px 38px rgba(0,0,0,0.12)'
            : null,
          zIndex: 2,
        }}
        style={style}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </Box>
  )
}
export default Hero
