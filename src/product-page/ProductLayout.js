import get from 'lodash/get'
import map from 'lodash/map'
import { ProductJsonLd } from 'next-seo'
import { Box } from '@material-ui/core'

import api from 'lib/api'

import Layout from 'src/ui/Layout'
import ProductFaq from 'src/product-page/ProductFaq'
import ProductIngredients from 'src/product-page/ProductIngredients'
import ProductTestimonials from 'components/product-testimonials'

const ProductLayout = ({
  product = {},
  hasLocalContent,
  faqItems,
  slug,
  children,
  isMobile,
}) => {
  const images = map(product.images, 'url')

  return (
    <Layout
      stickBar
      logoCompanion={
        product.packing ? `/static/svgs/${product.packing}.svg` : null
      }
      hideChat={isMobile}
      title={product.name}
      seo={{
        description: product.presentation,
        openGraph: {
          url: `https://vidanatural.eco.br/produtos/${slug}`,
          type: 'product',
          product: {
            price: get(product, 'variants.0.price', 0),
            currency: 'BRL',
          },
          images: map(images, (img) => ({
            url: api.vnda.getResizedImg(img, 500),
            width: 500,
            height: 500,
            alt: product.name,
          })),
        },
      }}
    >
      <ProductJsonLd
        productName={product.name}
        images={images}
        description={product.presentation}
        brand="Vida Natural"
        offers={{
          price: get(product, 'variants.0.price', 0),
          priceCurrency: 'BRL',
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          seller: {
            name: 'Vida Natural',
          },
        }}
      />
      {children}
      <Box
        css={{
          borderTop: '10px solid white',
          borderBottom: '10px solid white',
        }}
      >
        {hasLocalContent && <ProductIngredients product={product} />}
        <ProductFaq items={faqItems} />
      </Box>
      <ProductTestimonials product={product} />
    </Layout>
  )
}

export default ProductLayout
