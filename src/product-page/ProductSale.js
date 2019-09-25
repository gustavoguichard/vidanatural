import { useState } from 'react'
import { featureWrapper } from 'src/home/Feature'
import { wrapperCss } from 'src/home/ProductImg'
import Certifications from 'src/components/Certifications'
import Ingredients from 'src/components/Ingredients'
import { Button, Grid, Box, Typography } from '@material-ui/core'
import useGlobal from 'utils/useGlobal'
import theme from 'src/ui/theme'

const ProductFeature = ({ product }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Grid spacing={6} justify="center" container>
            <Grid item xs={12} sm={6} md={4} css={wrapperCss}>
              <img width="400" src={product.image_url} />
            </Grid>
            <Grid
              css={{ display: 'flex', justifyContent: 'center' }}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <Box {...featureWrapper}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={async () => {
                    setAdding(true)
                    await addToCart(variant.sku)
                    setAdding(false)
                  }}
                >
                  {adding ? 'Boa escolha 😉' : 'Adicionar ao carrinho'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box css={{ width: '100%' }}>
        <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      </Box>
      <Grid
        container
        justify="center"
        css={{ backgroundColor: theme.palette.common.white }}
      >
        <Grid item xs={12} md={10}>
          <Box pt={8} pb={8}>
            <Typography variant="h3">Ingredientes</Typography>
            <Typography
              variant="body1"
              css={{
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(2),
              }}
            >
              Esse produto é feito de{' '}
              <strong>ingredientes seguros que você conhece</strong>, se tiver
              alguma dúvida, clique no link de cada um para obter informações
              sobre o nível de segurança no site da EWG (Environmental Working
              Group - em inglês).
            </Typography>
            <Ingredients product={product} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductFeature
