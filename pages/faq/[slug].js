import get from 'lodash/get'
import { Typography } from '@material-ui/core'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import CTAButton from 'src/components/CTAButton'
import { RichText } from 'prismic-reactjs'
import theme from 'lib/theme'
import api from 'lib/api'

const FaqPage = ({ data }) => {
  const title = get(data, 'question.0.text')
  return (
    <SinglePageLayout title={title}>
      <Typography variant="h2">{title}</Typography>
      <RichText render={data.answer} />
      <CTAButton
        center={false}
        href="/faq"
        css={{ marginTop: theme.spacing(4) }}
      >
        Mais perguntas
      </CTAButton>
    </SinglePageLayout>
  )
}

export async function getStaticPaths() {
  const items = await api.cms.allByTypeAndTags('faq_item')
  return {
    paths: items.map((item) => ({ params: { slug: item.uid } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const props = await api.cms.getBySlug('faq_item', slug)
  return { props }
}

export default FaqPage
