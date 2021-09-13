import { useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import staticPaths from 'lib/static-paths/produtos-uid'
import staticProps from 'lib/static-props/produtos-uid'
import useGlobal from 'lib/use-global'
import { useTrack } from 'lib/analytics'

import EcommerceLayout from 'layouts/ecommerce'
import ErrorPage from 'pages/404'
import ProductLayout from 'components/products/layout'
import IncludedProducts from 'components/included-products'
import MoreProducts from 'components/more-products'
import ProductSale from 'components/products/sale'
import Skeleton from 'components/skeleton/product-sale'

const ProductPage = ({
  cmsData,
  faqItems,
  foundProduct,
  includedProducts,
  product,
  relatedProducts,
  slug,
  testimonials,
}) => {
  const { isFallback } = useRouter()
  const [, { notify }] = useGlobal()
  useEffect(() => {
    if (product.slug.includes('desodorante'))
      notify({
        title: 'O melhor desodorante que você conhecerá!',
        message: 'Sério mesmo, da uma olhada nos depoimentos mais abaixo! 😍',
        position: 'top-right',
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
        <MoreProducts
          title="Pessoas também compraram"
          products={relatedProducts}
        />
      )}
    </ProductLayout>
  ) : (
    <ErrorPage />
  )
}

ProductPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ProductPage
