import Link from 'src/components/Link'
import { Container, Typography, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import Emoji from 'src/components/Emoji'
import products from 'data/products'
import Product from './Product'

const Products = () => {
  return (
    <PaperContent>
      <Box textAlign="center" mb={2}>
        <Container maxWidth="md">
          <Typography variant="h4">
            <strong>
              Não basta ser natural e sustentável,
              <br />
              tem que ser eficiente <Emoji symbol="😉" label="piscada" />
            </strong>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis e sustentáveis, com
              fórmulas minimalistas e livre de crueldade contra animais.
            </Typography>
          </Container>
        </Container>
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
