import { GetStaticProps } from 'next'

import api from 'lib/api'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const item = await api.cms.getBySlug('faq_item', slug as string, {
    fetch: ['faq_item.title', 'faq_item.answer'],
  })
  return { props: { item } }
}

export default getStaticProps
