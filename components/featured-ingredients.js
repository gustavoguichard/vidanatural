import { Box, Grid, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'

import Img from 'components/img'
import InciLink from 'components/inci-link'

const FeaturedIngredients = ({ ingredients }) => {
  return (
    <Grid
      spacing={3}
      container
      justify="space-around"
      css={{ textAlign: 'center' }}
    >
      {ingredients.map((ing) => (
        <Grid key={ing.inci_title} item xs={12} sm={6} md={4}>
          <Box mb={-8} minHeight={250}>
            <Img
              className="responsive"
              width={300}
              alt={ing.title}
              src={ing.image.url}
            />
          </Box>
          <Typography
            variant="h4"
            css={{
              textShadow:
                '-2px -2px 1px white, 2px -2px 1px white, -2px 2px 1px white, 2px 2px 1px white',
            }}
          >
            {ing.title}
          </Typography>
          <Typography variant="caption">
            <InciLink {...ing} />
          </Typography>
          <Typography
            component="div"
            css={{
              color: theme.palette.text.hint,
              marginTop: theme.spacing(),
              marginBottom: theme.spacing(5),
            }}
          >
            <RichText render={ing.description} />
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default FeaturedIngredients
