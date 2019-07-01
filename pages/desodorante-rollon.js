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

const product = find(products, p => p.path === 'desodorante-rollon')

const Page = () => {
  return (
    <Layout>
      <Hero
        filter="brightness(0.4) saturate(1.3)"
        background="/static/images/axila.jpg"
      >
        <Typography variant="h3" css={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="h5">{product.slogan}</Typography>
      </Hero>
      <Box bgcolor={product.tone}>
        <PaperContent>
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" css={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
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
                  O alumínio se acumula no organismo e está relacionado a várias
                  complicações na saúde.
                </p>
                <p>
                  Além dele, outros ingredientes potencialmente tóxicos -
                  parabenos, triclosan e fragrâncias sintéticas - estão
                  presentes na composição dos desodorantes convencionais.
                </p>
                <p>
                  Um produto que vc usa todos os dias, não precisa ter
                  ingredientes nocivos pro corpo e pra natureza.
                </p>
              </Typography>
              <CTAButton IconComponent={LocationOn} center={false}>
                Onde encontrar?
              </CTAButton>
              <Typography variant="h5">
                Desodorante suave.
                <br />
                Protege do mau cheiro sem agredir sua saúde.
                <br />
                Não entope os poros.
                <br />
                Não impede seu suor.
                <br />
                Não intoxica.
                <br />
                Não polui o ambiente.
                <br />
                Indicado para peles sensíveis.
                <br />
                Indicado para o dia-a-dia.
                <br />
                Fácil aplicação.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                css={{
                  display: 'block',
                  margin: 'auto',
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
