import get from 'lodash/get'
import { Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/faq-uid'
import staticPaths from 'lib/static-paths/faq-uid'

import CTAButton from 'components/cta-button'
import SinglePageLayout from 'components/single-page-layout'

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

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default FaqPage
