import get from 'lodash/get'
import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core'
import ErrorPage from 'pages/404'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import CTAButton from 'src/components/CTAButton'
import { RichText } from 'prismic-reactjs'
import theme from 'src/ui/theme'
import * as cms from 'utils/cms'

const FaqPage = ({ data, error }) => {
  const { isFallback } = useRouter()
  const title = isFallback ? 'Carregando...' : get(data, 'question.0.text')
  return error ? (
    <ErrorPage />
  ) : (
    <SinglePageLayout title={title}>
      <Typography variant="h2">{title}</Typography>
      {data && !isFallback && <RichText render={data.answer} />}
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
  const items = await cms.allByTypeAndTags('faq_item')
  return {
    paths: items.map((item) => ({ params: { slug: item.uid } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const props = await cms.getBySlug('faq_item', slug)
  return props ? { props } : { props: { error: true } }
}

export default FaqPage
