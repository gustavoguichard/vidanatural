import { GetStaticProps } from 'next'

import api from 'lib/api'

const getStaticProps: GetStaticProps = async () => {
  const items = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.title]',
      fetch: ['title', 'answer'].map((field) => `faq_item.${field}`),
    },
    ['institucional'],
  )
  return { props: { items } }
}

export default getStaticProps
