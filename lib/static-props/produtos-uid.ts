import find from 'lodash/find'
import get from 'lodash/get'
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import { GetStaticProps } from 'next'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parseProduct from 'lib/parsers/product'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.vnda.listProduct(slug as string)
  const serverData = isArray(response) ? response[0] : response
  const product = parseProduct(serverData)

  const products = await api.vnda.search()
  const allRelatedProducts = getProductsByTag(
    products,
    map(product.tags, 'name'),
  )
  const relatedProducts = allRelatedProducts.filter(
    (p) =>
      p.id !== product.id &&
      // filter related products to Kits
      !product.tags.reduce((sum, tag) => sum || tag.name === 'kit', false),
  )

  const id = get(product, 'id')
  const localData = find(products, (p) => id === p.vndaId)
  const tags = map(get(product, 'tags'), 'name')
  const testimonials = await api.cms.getByTypeAndTags(
    'testimonial',
    {
      fetch: ['name', 'picture', 'content', 'short_content'].map(
        (field) => `testimonial.${field}`,
      ),
    },
    [...tags, 'institucional'],
  )
  const faqItems = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.title]',
      fetch: ['faq_item.title', 'faq_item.answer'],
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
        ...product,
      },
      tags,
      faqItems,
      testimonials,
      relatedProducts,
    },
    unstable_revalidate: 15,
  }
}

export default getStaticProps
