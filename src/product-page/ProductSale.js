import { useState } from 'react'
import { featureWrapper } from 'src/home/Feature'
import { wrapperCss } from 'src/home/ProductImg'
import { Button, Grid, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import useGlobal from 'utils/useGlobal'

const ProductFeature = ({ product }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants
  return (
    <PaperContent>
      <Grid container justify="center">
        <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
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
                  {adding ? 'Boa escolha =)' : 'Adicionar ao carrinho'}
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
