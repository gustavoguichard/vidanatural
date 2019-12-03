import React from 'react'
import CTAButton from 'src/components/CTAButton'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import BackgroundImg from 'src/components/BackgroundImg'

const Hero = () => (
  <Box color="secondary.contrastText" position="relative">
    <BackgroundImg
      alwaysShow
      src="/static/images/home_products.jpg"
      position="bottom"
    />
    <Container
      css={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '65vh',
        paddingBottom: '12rem',
        paddingTop: '12rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Grid container justify="space-between">
        <Grid item xs={12} sm={8} md={7}>
          <Typography variant="h2" color="primary">
            Cosméticos Naturais de Verdade, de alta eficiência, para
            necessidades básicas diárias.
          </Typography>
          <CTAButton
            css={{ margin: '2rem 0' }}
            color="secondary"
            variant="contained"
            href="/produtos"
          >
            Comprar produtos
          </CTAButton>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Hero
