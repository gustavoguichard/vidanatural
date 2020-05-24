import { useRouter } from 'next/router'
import { Container } from '@material-ui/core'

import { useIsMobile } from 'lib/hooks'
import staticPaths from 'lib/static-paths/produtos-uid'
import staticProps from 'lib/static-props/produtos-uid'

import ErrorPage from 'pages/404'
import ProductLayout from 'components/products/layout'
import RelatedProducts from 'components/related-products'
import ProductSale from 'components/products/sale'
import Skeleton from 'components/skeleton/product-sale'

const ProductPage = ({
  product,
  testimonials,
  faqItems,
  foundProduct,
  hasLocalContent,
  relatedProducts,
  slug,
}) => {
  const isMobile = useIsMobile()
  const { isFallback } = useRouter()

  return isFallback || foundProduct ? (
    <ProductLayout
      hasLocalContent={hasLocalContent}
      slug={slug}
      isMobile={isMobile}
      product={product}
      faqItems={faqItems}
      testimonials={testimonials}
    >
      {isFallback ? (
        <Skeleton />
      ) : (
        <ProductSale isMobile={isMobile} product={product} />
      )}
      <Container maxWidth="md">
        <RelatedProducts products={relatedProducts} />
      </Container>
    </ProductLayout>
  ) : (
    <ErrorPage
      href="/produtos"
      title="Produto não encontrado"
      linkText="Ver todos os produtos"
    />
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ProductPage
