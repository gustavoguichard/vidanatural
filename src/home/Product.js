import { useInView } from 'react-intersection-observer'
import Link from 'src/components/Link'
import { Grid, Paper, Typography, Zoom } from '@material-ui/core'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'

const Product = ({ index, name, showHome, path, tone, size }) => {
  const [ref, visible] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  return showHome ? (
    <Grid ref={ref} item xs md={size}>
      <Link href={path} title={name}>
        <Zoom in={visible} timeout={index * 300}>
          <Paper
            className="product-card"
            elevation={10}
            css={{
              alignItems: 'center',
              backgroundColor: theme.palette.secondary.light,
              display: 'flex',
              justifyContent: 'center',
              minHeight: 300,
              overflow: 'hidden',
              padding: theme.spacing(2),
              position: 'relative',
              transition: 'all .6s ease-in-out',
              '&:hover': {
                backgroundColor: tone,
              },
            }}
          >
            <BackgroundImg
              css={{
                opacity: 0,
                transition: 'all .75s ease-in-out',
                '.product-card:hover &': {
                  opacity: 0.2,
                },
              }}
              src="/static/images/plants-pattern.jpg"
            />
            <img
              css={{
                filter: 'saturate(.6)',
                transition: 'all .6s ease-in-out',
                '&:hover': {
                  filter: 'saturate(1.2)',
                },
              }}
              src={`/static/images/products/small/${path}.png`}
              alt={name}
            />
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
