import React from 'react'
import get from 'lodash/get'
import { Paper, Container, Box } from '@material-ui/core'
import theme from 'src/ui/theme'

const sizes = {
  small: '40vh',
  medium: '65vh',
  full: '100vh',
}

const BackgroundImg = ({ src }) => {
  return (
    <img
      src={src}
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      alt="Background"
    />
  )
}

const Hero = ({ children, size = 'medium', background, ...props }) => (
  <Box
    color="primary.contrastText"
    position="relative"
    bgcolor={theme.palette.primary.light}
  >
    {background && <BackgroundImg src={background} />}
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: get(sizes, size),
        position: 'relative',
        zIndex: 2,
      }}
      maxWidth="lg"
    >
      {children}
    </Container>
  </Box>
)

export default Hero
