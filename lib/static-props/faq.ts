import api from 'lib/api'

export default async () => {
  const items = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.question]',
      fetch: ['question', 'answer'].map((field) => `faq_item.${field}`),
    },
    ['institucional'],
  )
  return { props: { items } }
}
