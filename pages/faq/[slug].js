import { Box, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import staticProps from 'lib/static-props/faq-uid'
import staticPaths from 'lib/static-paths/faq-uid'

import Breadcrumbs from 'components/breadcrumbs'
import DocumentDetails from 'components/document-details'
import PostTags from 'components/post-tags'
import SinglePageLayout from 'components/single-page-layout'

const breadcrumbs = [
  { title: 'Sobre nós', href: '/sobre-a-vida-natural' },
  { href: '/faq', title: 'Dúvidas frequentes' },
]

const FaqPage = ({ item }) => {
  const { data, last_publication_date } = item

  return (
    <SinglePageLayout title={data.title}>
      <Typography variant="h2">{data.title}</Typography>
      <Box my={2}>
        <DocumentDetails date={last_publication_date} post={data.answer} />
      </Box>
      <Breadcrumbs links={breadcrumbs}>{data.title}</Breadcrumbs>
      <RichText render={data.answer} />
      <PostTags tags={item.tags} />
    </SinglePageLayout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default FaqPage
