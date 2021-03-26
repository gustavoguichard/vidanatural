import { useRouter } from 'next/router'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import staticPaths from 'lib/static-paths/produtos-uid'
import staticProps from 'lib/static-props/produtos-uid'
import { useTrack } from 'lib/analytics'

import ErrorPage from 'pages/404'
import ProductLayout from 'components/products/layout'
import IncludedProducts from 'components/included-products'
import RelatedProducts from 'components/related-products'
import ProductSale from 'components/products/sale'
import Skeleton from 'components/skeleton/product-sale'

const ProductPage = ({
  product,
  testimonials,
  faqItems,
  foundProduct,
  relatedProducts,
  includedProducts,
  cmsData,
  slug,
}) => {
  const { isFallback } = useRouter()
  useTrack('ViewContent')
  return isFallback || foundProduct ? (
    <ProductLayout
      slug={slug}
      product={product}
      faqItems={faqItems}
      testimonials={testimonials}
      cmsData={cmsData}
    >
      {isFallback ? (
        <Skeleton />
      ) : (
        <ProductSale
          hasTestimonials={!isEmpty(testimonials)}
          hasFaqItems={!isEmpty(faqItems)}
          product={product}
          cmsData={cmsData}
        />
      )}
      <div className="max-w-screen-lg m-auto">
        <IncludedProducts products={includedProducts} />
      </div>
      {get(product, 'isKit') || (
        <div className="max-w-screen-xl px-6 m-auto">
          <RelatedProducts products={relatedProducts} />
        </div>
      )}
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
