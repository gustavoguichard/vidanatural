import React from 'react'
import CTAButton from 'src/components/CTAButton'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import theme from 'src/ui/theme'

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
        minHeight: '65vh',
        paddingTop: '12rem',
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.up('sm')]: {
          paddingBottom: '12rem',
        },
      }}
    >
      <Grid container justify="space-between">
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            css={{
              background: 'rgba(255,255,255,.9)',
              position: 'relative',
              zIndex: 10,
              padding: theme.spacing(4),
              marginBottom: theme.spacing(2),
            }}
          >
            <Typography variant="h3">
              Cosméticos Naturais de Verdade!
            </Typography>
            <Typography variant="body1">
              Alta eficiência para as necessidades básicas diárias.
            </Typography>
            <CTAButton
              css={{ marginTop: theme.spacing(2) }}
              center={false}
              color="secondary"
              variant="contained"
              href="/produtos"
            >
              Comprar produtos
            </CTAButton>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          css={{
            right: 0,
            bottom: 0,
            [theme.breakpoints.up('sm')]: {
              position: 'absolute',
            },
          }}
        >
          <a href="/produtos" title="Página de produtos">
            <picture>
              <source
                type="image/webp"
                srcSet="/static/images/products-banner.webp"
              />
              <source
                type="image/png"
                srcSet="/static/images/products-banner.png"
              />
              <img
                className="responsive"
                alt="Products banner"
                src="/static/images/products-banner.png"
              />
            </picture>
          </a>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Hero
