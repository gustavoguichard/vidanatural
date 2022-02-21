import map from 'lodash/map'
import { ProductJsonLd } from 'next-seo'

import api from 'lib/api'

import SEO from 'components/seo'
import ProductFaq from './faq'
import ProductIngredients from './ingredients'
import ProductTestimonials from './testimonials'

const ProductLayout = ({
  product = {},
  testimonials,
  cmsData,
  faqItems,
  children,
}) => {
  const images = map(product.images, 'url')

  return (
    <>
      <SEO
        title={product.name}
        description={product.presentation}
        openGraph={{
          url: product?.url ?? '',
          type: 'product',
          product: {
            price: product?.variants?.[0]?.sale_price ?? 0,
            currency: 'BRL',
          },
          images: map(images, (img) => ({
            url: api.vnda.utils.getResizedImg(img, 500),
            width: 500,
            height: 500,
            alt: product.name,
          })),
        }}
      />
      <ProductJsonLd
        productName={product.name}
        images={images}
        description={product.presentation}
        brand="Vida Natural"
        offers={{
          price: product?.variants?.[0]?.sale_price ?? 0,
          priceCurrency: 'BRL',
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          seller: {
            name: 'Vida Natural',
          },
        }}
      />
      {children}
      <ProductIngredients {...cmsData} />
      <ProductFaq items={faqItems} />
      <ProductTestimonials product={product} testimonials={testimonials} />
    </>
  )
}

export default ProductLayout
