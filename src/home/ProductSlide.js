import { Grid, Paper, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import MdContent from 'src/components/MdContent'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'

const ProductSlide = ({ product, hidden, isMobile, show }) => (
  <Grid
    spacing={3}
    justify="center"
    container
    css={{
      background: `url(/static/images/products/big/${product.path}-bg.png) no-repeat`,
      backgroundPosition: 'top center',
      backgroundSize: 'contain',
      position: hidden ? 'static' : 'absolute',
      top: theme.spacing(isMobile ? 7 : 10),
      left: 0,
      zIndex: show ? 0 : -1,
      transition: 'all .3s',
      opacity: show ? 1 : 0,
      pointerEvents: hidden ? 'none' : null,
    }}
  >
    <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
      <Link
        href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
        title={product.name}
        prefetch={false}
      >
        <Img
          className="responsive"
          css={{
            width: 520,
            marginTop: theme.spacing(4),
          }}
          src={`/static/images/products/big/${product.path}.png`}
          alt={product.name}
        />
      </Link>
    </Grid>
    <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
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
          href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
          prefetch={false}
        >
          Saiba mais
        </CTAButton>
      </Paper>
    </Grid>
  </Grid>
)

export default ProductSlide
