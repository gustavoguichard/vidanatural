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
import pote from 'static/svgs/pote.svg'

const product = find(products, p => p.path === 'desodorante-em-pasta')

const Page = () => {
  return (
    <Layout logoCompanion={pote}>
      <Hero
        filter="brightness(0.4) saturate(1.3)"
        background="/static/images/peto.jpg"
      >
        <Typography variant="h2">{product.name}</Typography>
        <Typography variant="h4">{product.slogan}</Typography>
      </Hero>
      <Box bgcolor={product.tone}>
        <PaperContent>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h2">{product.name}</Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(2),
                  marginBottom: theme.spacing(2),
                  paddingRight: theme.spacing(2),
                }}
                variant="body1"
                component="div"
              >
                <p>
                  Por que ele funciona? As bactérias, causadoras do mau cheiro,
                  adoram uma calorzinho, umidade e acidez.
                </p>
                <p>
                  O bicarbonato de sódio, sendo um antiácido, regula o pH da
                  axila e cria ambiente menos propício para proliferação
                  bactérias.
                </p>

                <p>Reduzindo as bactérias, reduz o mau cheiro.</p>
                <p>
                  O tea tree é um bactericida super completo e ajuda nesse
                  controle.
                </p>
                <p>
                  A manteiga de karité atua como fixador, além de hidratar a
                  axila ;)
                </p>
              </Typography>
              <CTAButton IconComponent={LocationOn} center={false}>
                Onde encontrar?
              </CTAButton>
              <Typography variant="h4">
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
