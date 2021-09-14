import staticProps from 'lib/static-props/faq-uid'
import staticPaths from 'lib/static-paths/faq-uid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import DocumentDetails from 'components/document-details'
import { RichText } from 'prismic-reactjs'
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
      <div className="prose text-gray-500 prose-secondary">
        <RichText render={data.answer} />
      </div>
    </SinglePageLayout>
  )
}

FaqPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default FaqPage
