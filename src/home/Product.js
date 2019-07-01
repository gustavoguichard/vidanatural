import { useRef } from 'react'
import Link from 'src/components/Link'
import { Grid, Paper, Typography, Zoom } from '@material-ui/core'
import theme from 'src/ui/theme'
import { useOnScreen } from 'utils/hooks'
import PlantDecoration from './PlantDecoration'

const Product = ({ index, name, showHome, path, tone, size }) => {
  const ref = useRef()
  const visible = useOnScreen(ref, '-50px', true)
  return showHome ? (
    <Grid ref={ref} item xs md={size}>
      <Link href={path}>
        <Zoom in={visible} timeout={index * 300}>
          <Paper
            className="product-card"
            elevation={10}
            css={{
              alignItems: 'center',
              backgroundColor: theme.palette.secondary.light,
              display: 'flex',
              filter: 'saturate(.8)',
              justifyContent: 'center',
              minHeight: 300,
              overflow: 'hidden',
              padding: theme.spacing(2),
              position: 'relative',
              transition: 'all .3s',
              '&:hover': {
                backgroundColor: tone,
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
        </Zoom>
      </Link>
    </Grid>
  ) : null
}

export default Product
