import { GetStaticPaths } from 'next'

import api from 'lib/api'

import { FaqItem } from 'types/cms'

const getStaticPaths: GetStaticPaths = async () => {
  const items = await api.cms.getByTypeAndTags('faq_item', {
    fetch: 'faq_item.uid',
  })
  return {
    paths: (items as FaqItem[]).map((item) => ({ params: { slug: item.uid } })),
    fallback: false,
  }
}

export default getStaticPaths
