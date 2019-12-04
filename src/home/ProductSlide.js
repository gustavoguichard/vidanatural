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
  const onSwiping = ({ first, deltaX, absX }) => {
    first && absX > 10 && handleChange({}, deltaX < 0 ? index - 1 : index + 1)
  }
  const swipeHandlers = useSwipeable({ onSwiping })
  const swipeHandlers2 = useSwipeable({ onSwiping })
  return (
    <Grid
      spacing={3}
      justify="center"
      container
      css={{
        position: hidden ? 'static' : 'absolute',
        top: theme.spacing(isMobile ? 7 : 10),
        left: 0,
        zIndex: show && !hidden ? 0 : -1,
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
        src={`/static/images/products/${product.path}-bg.png`}
        alt="decorative"
      />
      <Grid
        item
        xs={12}
        md={10}
        css={{
          textAlign: 'center',
          minHeight: 350,
          visibility: hidden ? 'hidden' : 'visible',
        }}
      >
        <Link
          {...swipeHandlers}
          href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
          title={product.name}
          prefetch={false}
        >
          <Img
            className="responsive"
            hideSpinner
            css={{
              width: 520,
              marginTop: theme.spacing(4),
              transition: 'all .6s',
              position: 'relative',
              transitionDelay: '.3s',
              top: show ? 0 : -15,
              opacity: show ? 1 : 0,
            }}
            src={`/static/images/products/${product.path}.png`}
            alt={product.name}
          />
        </Link>
      </Grid>
      <Grid item xs={12} md={10} css={{ zIndex: 10, padding: '0 !important' }}>
        {children}
      </Grid>
      <Grid
        {...swipeHandlers2}
        item
        xs={12}
        md={6}
        css={{
          paddingTop: '0 !important',
          textAlign: 'center',
          visibility: hidden ? 'hidden' : 'visible',
        }}
      >
        <Paper
          elevation={1}
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
            href={`/produto/${product.slug}`}
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
