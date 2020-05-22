import find from 'lodash/find'
import get from 'lodash/get'
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import { GetStaticProps } from 'next'

import api from 'lib/api'

import products from 'data/products'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.vnda.listProduct(slug as string)
  const serverData = isArray(response) ? response[0] : response
  const id = get(serverData, 'id')
  const localData = find(products, (p) => id === p.vndaId)
  const tags = map(get(serverData, 'tags'), 'name')
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
        ...serverData,
      },
      tags,
      faqItems,
    },
    unstable_revalidate: 15,
  }
}

export default getStaticProps
