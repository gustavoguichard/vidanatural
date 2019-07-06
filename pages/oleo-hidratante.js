import { Fragment } from 'react'
import find from 'lodash/find'
import { Grid, Paper, Container, Typography, Box } from '@material-ui/core'
import ProductLayout from 'src/product-page/ProductLayout'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import products from 'data/products'

const product = find(products, p => p.path === 'oleo-hidratante')

const Page = () => {
  return (
    <ProductLayout product={product}>
      <Box>
        <PaperContent>
          <Grid container alignItems="center" />
        </PaperContent>
      </Box>
    </ProductLayout>
  )
}

export default Page
