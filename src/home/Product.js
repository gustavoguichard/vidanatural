import Link from 'src/components/Link'
import { Grid, Paper, Typography } from '@material-ui/core'
import theme from 'src/ui/theme'
import PlantDecoration from './PlantDecoration'

const Product = ({ name, showHome, path, tone, size }) =>
  showHome ? (
    <Grid item xs md={size}>
      <Link href={path} display="flex">
        <Paper
          className="product-card"
          elevation={10}
          css={{
            alignItems: 'center',
            backgroundColor: `${theme.palette.secondary.light} !important`,
            display: 'flex',
            filter: 'saturate(.8)',
            justifyContent: 'center',
            minHeight: 300,
            overflow: 'hidden',
            padding: theme.spacing(2),
            position: 'relative',
            transition: 'all .3s',
            '&:hover': {
              backgroundColor: `${tone} !important`,
              filter: 'saturate(1.2)',
            },
          }}
        >
          <img src={`/static/images/products/small/${path}.png`} alt={name} />
          <PlantDecoration />
          <Typography
            css={{ position: 'absolute', bottom: 5, fontWeight: 'bold' }}
            color="textPrimary"
            variant="caption"
          >
            {name}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  ) : null

export default Product
