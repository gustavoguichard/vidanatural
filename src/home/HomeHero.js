import React from 'react'
import NextLink from 'next/link'
import Img from 'src/components/Img'
import CTAButton from 'src/components/CTAButton'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'

const Hero = () => (
  <Box color="secondary.contrastText" position="relative">
    <BackgroundImg
      alwaysShow
      src="/static/images/banner.jpg"
      position="bottom"
    />
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
            <Img
              className="responsive"
              alt="Products banner"
              src="/static/images/products-banner.png"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Hero
