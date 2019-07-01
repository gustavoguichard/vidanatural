import Link from 'src/components/Link'
import { Grid, Typography, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import Emoji from 'src/components/Emoji'
import products from 'data/products'
import Product from './Product'

const Products = () => {
  return (
    <PaperContent>
      <Box textAlign="center" mb={2}>
        <Grid spacing={3} justify="center" container>
          <Grid item md={6}>
            <Typography variant="h4">
              <strong>
                Não basta ser natural e sustentável, tem que ser eficiente{' '}
                <Emoji symbol="😉" label="piscada" />
              </strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid spacing={3} justify="center" container>
          <Grid item md={6}>
            <Typography variant="body1">
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis e sustentáveis, com
              fórmulas minimalistas e livre de crueldade contra animais.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {products.map(product => (
          <Product key={product.path} {...product} />
        ))}
      </Box>
    </PaperContent>
  )
}

export default Products
