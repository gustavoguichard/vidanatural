import isEmpty from 'lodash/isEmpty'
import { Grid, Typography, useTheme } from '@material-ui/core'

import ProductCard from 'components/product-card'

const ProductGrid = ({ products, title }) => {
  const theme = useTheme()
  return isEmpty(products) ? null : (
    <>
      {title ? (
        <Typography
          css={{ margin: theme.spacing(4) }}
          variant="h3"
          align="center"
        >
          Produtos relacionados
        </Typography>
      ) : null}
      <Grid container spacing={2} css={{ alignItems: 'stretch' }}>
        {products.map((product, index) => (
          <Grid
            md={4}
            sm={6}
            item
            key={index}
            css={{ alignItems: 'stretch', display: 'flex' }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProductGrid
