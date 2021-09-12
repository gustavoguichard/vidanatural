import staticProps from 'lib/static-props/faq-uid'
import staticPaths from 'lib/static-paths/faq-uid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import DocumentDetails from 'components/document-details'
import PostTags from 'components/post-tags'
import RichText from 'components/rich-text'
import SinglePageLayout from 'components/single-page-layout'

const FaqPage = ({ item }) => {
  const { data, last_publication_date } = item

  return (
    <SinglePageLayout>
      <SEO title={data.title} />
      <h2 className="text-4xl font-bold tracking-tight">{data.title}</h2>
      <div className="my-4">
        <DocumentDetails date={last_publication_date} post={data.answer} />
      </div>
      <RichText>{data.answer}</RichText>
      <PostTags tags={item.tags} />
    </SinglePageLayout>
  )
}

FaqPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default FaqPage
