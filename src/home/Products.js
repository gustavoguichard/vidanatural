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
            <Typography variant="h6">Nossos produtos</Typography>
            <Typography variant="h4">
              <strong>
                Não basta ser natural e sustentável, tem que ser eficiente{' '}
                <Emoji symbol="😉" label="piscada" />
              </strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid spacing={5} justify="center" container>
          <Grid item md={6}>
            <Typography variant="body1">
              Nossos cosméticos são <strong>feitos a mão</strong>, produzidos em
              pequenos lotes, com <strong>ingredientes naturais</strong>,{' '}
              <strong>biodegradáveis</strong> e sustentáveis, com fórmulas
              minimalistas e <strong>livres de crueldade</strong> contra
              animais.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justify="center">
        <Grid spacing={2} md={10} item container justify="center">
          {products.map((product, index) => (
            <Product key={product.path} index={index} {...product} />
          ))}
        </Grid>
      </Grid>
    </PaperContent>
  )
}

export default Products
