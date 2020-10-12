import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'

import CTALink from 'components/cta-link'
import FeaturedIngredients from 'components/featured-ingredients'

const IllustratedIngredients = ({
  ingredients_description,
  ingredients_title,
  ingredients,
}) => {
  const matches = useMediaQuery('(min-width: 760px)')
  return (
    <Box
      css={{
        borderBottom: '10px solid white',
        borderTop: '10px solid white',
      }}
      id="ingredientes"
    >
      <Container
        css={{ paddingLeft: theme.spacing(5), paddingRight: theme.spacing(5) }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Box pt={8} pb={8} textAlign={matches ? 'center' : 'left'}>
              <Typography variant="h3">{ingredients_title}</Typography>
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
              <CTALink href="/produtos" css={{ marginTop: theme.spacing(4) }}>
                Conhecer os produtos
              </CTALink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IllustratedIngredients
