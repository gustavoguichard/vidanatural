import find from 'lodash/find'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import { useRouter } from 'next/router'

import api from 'lib/api'
import { useIsMobile } from 'lib/hooks'

import ErrorPage from 'pages/404'
import GeneralProductSale from 'components/products/general-sale'
import ProductLayout from 'components/products/layout'
import ProductSale from 'components/products/sale'

import products from 'data/products'

const ProductPage = ({
  product,
  tags,
  faqItems,
  foundProduct,
  hasLocalContent,
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
    >
      {hasLocalContent && !isFallback ? (
        <ProductSale isMobile={isMobile} product={product} />
      ) : (
        <GeneralProductSale isMobile={isMobile} product={product} />
      )}
    </ProductLayout>
  ) : (
    <ErrorPage />
  )
}

export async function getStaticPaths() {
  const products = await api.vnda.search()
  return {
    paths: products.map((p) => ({
      params: { slug: [p.slug, p.id].join('-') },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await api.vnda.listProduct(slug)
  const serverData = isArray(response) ? response[0] : response
  const id = get(serverData, 'id')
  const localData = find(products, (p) => id === p.vndaId)
  const tags = map(get(serverData, 'tags'), 'name')
  const faqItems = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.question]',
    },
    tags,
  )
  return {
    props: {
      slug,
      foundProduct: !!serverData,
      hasLocalContent: !!localData,
      product: {
        ...localData,
        ...serverData,
      },
      tags,
      faqItems,
    },
  }
}

export default ProductPage
