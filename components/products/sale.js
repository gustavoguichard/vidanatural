import ReactMarkdown from 'react-markdown'
import { useInView } from 'react-intersection-observer'
import { Box, Container, Grid, Typography } from '@material-ui/core'

import { toCurrency } from 'lib/utils'
import { useIsDesktop } from 'lib/hooks'
import theme from 'lib/theme'

import Breadcrumbs from './breadcrumbs'
import Description from './description'
import ImageGallery from 'components/image-gallery'
import ProductCTA from './cta'
import MobileCTA from './mobile-cta'

const ProductSale = ({ product, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const [variant] = product.variants || [{}]
  const isDesktop = useIsDesktop()

  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <Container maxWidth="lg">
        <Box pt={isMobile ? 8 : 7} pb={6}>
          {isMobile || <Breadcrumbs product={product} />}
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
                  {product.title}
                </Typography>
              )}
              <Typography variant="h4">
                {toCurrency(variant.price || 0)}
              </Typography>
              {isMobile && <Breadcrumbs isMobile product={product} />}
              <ReactMarkdown
                escapeHtml={false}
                css={{
                  marginTop: theme.spacing(3),
                  fontWeight: 600,
                  color: theme.palette.text.hint,
                  p: {
                    marginBottom: 0,
                  },
                }}
                className="MuiTypography-root MuiTypography-body1"
                source={product.subtitle}
              />
              <Typography variant="caption">
                <a href="#descricao">Mais detalhes</a>
                {' - '}
                <a href={`#ingredientes-${product.path}`}>Ver ingredientes</a>
              </Typography>
              <ReactMarkdown
                escapeHtml={false}
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  fontWeight: 400,
                  color: theme.palette.text.hint,
                }}
                className="MuiTypography-root MuiTypography-body1"
                source={product.presentation}
              />
              <ProductCTA ref={ref} product={product} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Description product={product} isDesktop={isDesktop} />
    </>
  )
}

export default ProductSale
