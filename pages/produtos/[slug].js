import get from 'lodash/get'
import find from 'lodash/find'
import isArray from 'lodash/isArray'
import GeneralProductSale from 'src/product-page/GeneralProductSale'
import ProductLayout from 'src/product-page/ProductLayout'
import ProductSale from 'src/product-page/ProductSale'
import products from 'data/products'
import api from 'utils/api'
import { useIsMobile } from 'utils/responsive'

const ProductPage = ({ product, hasLocalContent, slug }) => {
  const isMobile = useIsMobile()

  return (
    <ProductLayout
      hasLocalContent={hasLocalContent}
      slug={slug}
      isMobile={isMobile}
      product={product}
    >
      {hasLocalContent ? (
        <ProductSale isMobile={isMobile} product={product} />
      ) : (
        <GeneralProductSale isMobile={isMobile} product={product} />
      )}
    </ProductLayout>
  )
}

export async function getServerSideProps({ params, res }) {
  const { slug } = params
  const response = await api.listProduct(slug)
  const serverData = isArray(response) ? response[0] : response
  if (!get(serverData, 'id')) {
    res.writeHead(404, { Location: '/404' })
    res.end()
    return null
  }
  const localData = find(products, p => serverData.id === p.vndaId)
  return {
    props: {
      slug,
      hasLocalContent: !!localData,
      product: {
        ...localData,
        ...serverData,
      },
    },
  }
}

export default ProductPage
