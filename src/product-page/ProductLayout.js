import get from 'lodash/get'
import map from 'lodash/map'
import Layout from 'src/ui/Layout'
import ProductIngredients from 'src/product-page/ProductIngredients'
import ProductTestimonials from 'src/components/ProductTestimonials'
import { ProductJsonLd } from 'next-seo'
import { getResizedImg } from 'utils/api'

const ProductLayout = ({
  product,
  hasLocalContent,
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
          images: map(images, img => ({
            url: getResizedImg(img, 500),
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
      {hasLocalContent && <ProductIngredients product={product} />}
      <ProductTestimonials product={product} />
    </Layout>
  )
}

export default ProductLayout
