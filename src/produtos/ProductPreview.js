import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import MdContent from 'src/components/MdContent'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'
import { isOdd } from 'utils/helpers'

const ProductPreview = ({ product, index }) => {
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)
  return (
    <Grid justify="center" container>
      <Img
        className="responsive"
        hideSpinner
        css={{
          zIndex: -1,
          position: 'absolute',
          marginTop: 40,
          transition: 'all .6s',
        }}
        src={`/static/images/products/${product.path}-bg.png`}
        alt="decorative"
      />
      <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
        <Link
          href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
          title={product.name}
        >
          <Img
            className="responsive"
            css={{ width: 520, marginTop: theme.spacing(4) }}
            src={`/static/images/products/${product.path}.png`}
            alt={product.name}
          />
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          order: isOdd(index) && matches ? -1 : 0,
        }}
      >
        <Paper
          elevation={3}
          css={{
            backgroundColor: 'rgba(255, 255, 255, .9)',
            padding: theme.spacing(4),
          }}
        >
          <Typography variant="h3">{product.name}</Typography>
          <MdContent
            css={{
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(2),
              fontWeight: 400,
              color: theme.palette.text.hint,
            }}
            className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
            content={product.subtitle}
          />
          <CTAButton
            color="secondary"
            center={false}
            href={
              product.slug ? `/produto/${product.slug}` : `/${product.path}`
            }
          >
            Saiba mais
          </CTAButton>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductPreview
