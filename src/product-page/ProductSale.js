import { useInView } from 'react-intersection-observer'
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import MdContent from 'src/components/MdContent'
import Link from 'src/components/Link'
import ImageGallery from 'src/product-page/ImageGallery'
import ProductCTA from 'src/product-page/ProductCTA'
import MobileCTA from 'src/product-page/MobileCTA'
import { toCurrency } from 'utils/helpers'
import theme from 'src/ui/theme'

const ProductSale = ({ product, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })

  const isLarge = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)

  const [variant] = product.variants || [{}]

  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <Container
        css={{ backgroundColor: theme.palette.common.white }}
        maxWidth="lg"
      >
        <Box pt={12} pb={6}>
          <Grid spacing={4} container justify="center">
            <Grid item xs={12} md={6}>
              <ImageGallery product={product} isLarge={isLarge} />
            </Grid>
            <Grid item xs={12} md={6}>
              {isLarge && (
                <Typography
                  variant="h3"
                  css={{ marginBottom: theme.spacing() }}
                >
                  {product.fullName || product.name}
                </Typography>
              )}
              <Typography variant="h4">
                {toCurrency(variant.price || 0)}
              </Typography>
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
              <p>
                <Link>Saiba mais</Link>
              </p>
              <ProductCTA ref={ref} product={product} isLarge={isLarge} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default ProductSale
