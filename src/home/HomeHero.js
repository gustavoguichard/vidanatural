import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import CTAButton from 'components/cta-button'

const Hero = () => (
  <Box color="secondary.contrastText" position="relative">
    <picture>
      <source type="image/webp" srcSet="/static/images/banner.webp" />
      <source type="image/jpg" srcSet="/static/images/banner.jpg" />
      <img
        src="/static/images/banner.jpg"
        alt="Background"
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'bottom',
        }}
      />
    </picture>
    <Container
      css={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '40vh',
        paddingBottom: '4rem',
        paddingTop: '8rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={6} css={{ textAlign: 'center' }}>
          <Typography variant="h3" color="textSecondary">
            Cosméticos Naturais de Verdade!
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            css={{ margin: theme.spacing(2) }}
          >
            Alta eficiência para as necessidades básicas diárias.
          </Typography>
          <CTAButton
            color="secondary"
            variant="contained"
            href="/produtos"
            css={{ color: 'white' }}
          >
            Comprar produtos
          </CTAButton>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Hero
