import { Grid, Paper, Typography } from '@material-ui/core'
import { useSwipeable } from 'react-swipeable'
import CTAButton from 'src/components/CTAButton'
import MdContent from 'src/components/MdContent'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'

const ProductSlide = ({
  product,
  index,
  handleChange,
  children,
  hidden,
  isMobile,
  show,
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChange({}, index + 1),
    onSwipedRight: () => handleChange({}, index - 1),
  })
  return (
    <Grid
      spacing={3}
      justify="center"
      container
      css={{
        position: hidden ? 'static' : 'absolute',
        top: theme.spacing(isMobile ? 7 : 10),
        left: 0,
        zIndex: show ? 0 : -1,
        transition: 'all .3s',
        opacity: show ? 1 : 0,
      }}
    >
      <Img
        className="responsive"
        hideSpinner
        css={{
          zIndex: -1,
          position: 'absolute',
          marginTop: 40,
          transition: 'all .6s',
          opacity: show && !hidden ? 1 : 0,
          pointerEvents: hidden ? 'none' : null,
        }}
        src={`/static/images/products/big/${product.path}-bg.png`}
        alt="decorative"
      />
      <Grid
        {...swipeHandlers}
        item
        xs={12}
        md={10}
        css={{
          textAlign: 'center',
          opacity: hidden ? 0 : 1,
          pointerEvents: hidden ? 'none' : null,
        }}
      >
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
              transition: 'all .6s',
              position: 'relative',
              transitionDelay: '.3s',
              top: show ? 0 : -15,
              opacity: show ? 1 : 0,
            }}
            src={`/static/images/products/big/${product.path}.png`}
            alt={product.name}
          />
        </Link>
      </Grid>
      <Grid
        {...swipeHandlers}
        item
        xs={12}
        md={10}
        css={{
          textAlign: 'center',
          pointerEvents: hidden ? null : 'none',
          opacity: hidden ? 1 : 0,
          zIndex: 10,
        }}
      >
        {children}
      </Grid>
      <Grid
        {...swipeHandlers}
        item
        xs={12}
        md={6}
        css={{
          textAlign: 'center',
          pointerEvents: hidden ? 'none' : null,
          opacity: hidden ? 0 : 1,
        }}
      >
        <Paper
          elevation={3}
          css={{
            backgroundColor: 'rgba(255, 255, 255, .9)',
            padding: theme.spacing(4),
            transition: 'all .6s',
            position: 'relative',
            bottom: show ? 0 : -15,
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
            href={
              product.slug ? `/produto/${product.slug}` : `/${product.path}`
            }
            prefetch={false}
          >
            Saiba mais
          </CTAButton>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductSlide
