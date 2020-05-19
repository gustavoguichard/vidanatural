import get from 'lodash/get'
import map from 'lodash/map'
import find from 'lodash/find'
import isArray from 'lodash/isArray'
import { useRouter } from 'next/router'
import ErrorPage from 'pages/404'
import GeneralProductSale from 'src/product-page/GeneralProductSale'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductSale from 'src/product-page/ProductSale'
import products from 'data/products'
import api from 'lib/api'
import { useIsMobile } from 'lib/hooks'

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
  const faqItems = await api.cms.allByTypeAndTags('faq_item', tags, {
    orderings: '[my.faq_item.question]',
  })
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
