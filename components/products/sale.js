import ReactMarkdown from 'react-markdown'
import { useInView } from 'react-intersection-observer'
import { Grid, Typography } from '@material-ui/core'

import { useIsDesktop } from 'lib/hooks'
import theme from 'lib/theme'

import ImageGallery from 'components/image-gallery'
import Breadcrumbs from './breadcrumbs'
import Description from './description'
import PriceTag from './price-tag'
import ProductContainer from './container'
import ProductCTA from './cta'
import MobileCTA from './mobile-cta'

const ProductSale = ({ product, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const [variant] = product.variants || [{}]
  const isDesktop = useIsDesktop()
  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <ProductContainer product={product} isMobile={isMobile}>
        <Grid item xs={12} md={6}>
          <ImageGallery product={product} isDesktop={isDesktop} />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: theme.spacing(2, 5) }}>
          {isDesktop && (
            <Typography variant="h3" css={{ marginBottom: theme.spacing() }}>
              {product.name}
            </Typography>
          )}
          <PriceTag item={variant} />
          {isMobile && <Breadcrumbs isMobile product={product} />}
          {product.description.featured && (
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
              source={product.description.featured}
            />
          )}
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
            source={product.description.presentation}
          />
          <PriceTag item={variant} />
          <ProductCTA ref={ref} product={product} />
        </Grid>
      </ProductContainer>
      {product.description.information && (
        <Description product={product} isDesktop={isDesktop} />
      )}
    </>
  )
}

export default ProductSale
