import isEmpty from 'lodash/isEmpty'
import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'

import FeaturedIngredients from 'components/featured-ingredients'
import Ingredients from 'components/ingredients'

const ProductIngredients = ({
  ingredients_description,
  ingredients,
  ingredients_table,
}) => {
  const matches = useMediaQuery('(min-width: 760px)')
  const hasIngredients = !isEmpty(ingredients)
  const hasTable = !isEmpty(ingredients_table)
  return hasIngredients || hasTable ? (
    <Container
      id="ingredientes"
      css={{
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        borderTop: '10px solid white',
      }}
    >
      <Grid css={{ padding: 0 }} container justify="center">
        <Grid item xs={12} md={10}>
          <Box pt={8} pb={8} textAlign={matches ? 'center' : 'left'}>
            <Typography variant="h3">Ingredientes</Typography>
            <Typography
              component="div"
              css={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(4),
              }}
            >
              <RichText render={ingredients_description} />
            </Typography>
            <FeaturedIngredients ingredients={ingredients} />
            <Ingredients
              hasFeatured={hasIngredients}
              ingredients={ingredients_table}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : null
}

export default ProductIngredients
