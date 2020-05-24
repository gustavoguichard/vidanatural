import ReactMarkdown from 'react-markdown'
import { useInView } from 'react-intersection-observer'
import { Breadcrumbs as BCrumbs, Grid, Typography } from '@material-ui/core'

import { useIsDesktop } from 'lib/hooks'
import theme from 'lib/theme'

import ImageGallery from 'components/image-gallery'
import Breadcrumbs from './breadcrumbs'
import Description from './description'
import PriceTag from './price-tag'
import ProductContainer from './container'
import ProductCTA from './cta'
import MobileCTA from './mobile-cta'

const ProductSale = ({ product, isMobile, hasTestimonials, hasFaqItems }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const [variant] = product.variants || [{}]
  const isDesktop = useIsDesktop()

  const hasInformation = !!product.description.information
  const hasIngredinets = !!product.ingredients

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
          <BCrumbs
            variant="caption"
            color="primary"
            separator="-"
            css={{ fontSize: '.8rem', margin: theme.spacing(1, 0) }}
          >
            {hasInformation && <a href="#descricao">Mais detalhes</a>}
            {hasIngredinets && <a href="#ingredientes">Ver ingredientes</a>}
            {hasFaqItems && <a href="#faq">Dúvidas</a>}
            {hasTestimonials && <a href="#depoimentos">Depoimentos</a>}
          </BCrumbs>
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
      {hasInformation && (
        <Description product={product} isDesktop={isDesktop} />
      )}
    </>
  )
}

export default ProductSale
