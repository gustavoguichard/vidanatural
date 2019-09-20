import { featureWrapper } from 'src/home/Feature'
import { wrapperCss } from 'src/home/ProductImg'
import { Button, Grid, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import api from 'utils/api'

const ProductFeature = ({ product }) => {
  const [variant] = product.variants
  return (
    <PaperContent>
      <Grid container justify="center">
        <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
          <Grid spacing={6} justify="center" container>
            <Grid item xs={12} sm={6} md={4} css={wrapperCss}>
              <img src={product.image_url} />
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
                  color="primary"
                  onClick={() => api.addToCart(variant.sku)}
                >
                  Adicionar ao carrinho
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperContent>
  )
}

export default ProductFeature
