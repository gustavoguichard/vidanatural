import { useInView } from 'react-intersection-observer'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import ImageGallery from 'src/product-page/ImageGallery'
import ProductCTA from 'src/product-page/ProductCTA'
import MobileCTA from 'src/product-page/MobileCTA'
import { toCurrency } from 'utils/helpers'
import { useIsDesktop } from 'utils/responsive'
import theme from 'src/ui/theme'

const ProductSale = ({ product, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const [variant] = product.variants || [{}]
  const isDesktop = useIsDesktop()

  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <Container maxWidth="lg">
        <Box pt={12} pb={6}>
          <Grid spacing={4} container justify="center">
            <Grid item xs={12} md={6}>
              <ImageGallery product={product} isDesktop={isDesktop} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              css={{
                paddingLeft: `${theme.spacing(5)}px !important`,
                paddingRight: `${theme.spacing(5)}px !important`,
              }}
            >
              {isDesktop && (
                <Typography
                  variant="h3"
                  css={{ marginBottom: theme.spacing() }}
                >
                  {product.name}
                </Typography>
              )}
              <Typography variant="h4">
                {toCurrency(variant.price || 0)}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  fontWeight: 400,
                  color: theme.palette.text.hint,
                  a: {
                    color: theme.palette.secondary.main,
                    textDecoration: 'none',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <ProductCTA ref={ref} product={product} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default ProductSale
