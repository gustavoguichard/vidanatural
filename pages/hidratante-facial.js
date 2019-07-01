import { Fragment } from 'react'
import find from 'lodash/find'
import { Grid, Paper, Container, Typography, Box } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import ProductTestimonials from 'src/components/ProductTestimonials'
import CTAButton from 'src/components/CTAButton'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import products from 'data/products'

const product = find(products, p => p.path === 'hidratante-facial')

const Page = () => {
  return (
    <Layout>
      <Hero
        filter="brightness(0.4) saturate(1.3)"
        background="/static/images/morena.jpg"
      >
        <Typography variant="h3" css={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="h5">{product.slogan}</Typography>
      </Hero>
      <Box bgcolor={product.tone}>
        <PaperContent>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" css={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              <CTAButton IconComponent={LocationOn} center={false}>
                Onde encontrar?
              </CTAButton>
              <Typography variant="h5">
                {product.benefits.map(benefit => (
                  <Fragment key={benefit}>
                    <span>{benefit}</span>
                    <br />
                  </Fragment>
                ))}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                css={{
                  display: 'block',
                  margin: 'auto',
                  maxWidth: '100%',
                  marginTop: theme.spacing(4),
                  marginBottom: theme.spacing(4),
                }}
                src={`/static/images/products/${product.path}.png`}
                alt={product.name}
              />
            </Grid>
          </Grid>
        </PaperContent>
      </Box>
      <ProductTestimonials product={product} />
    </Layout>
  )
}

export default Page
