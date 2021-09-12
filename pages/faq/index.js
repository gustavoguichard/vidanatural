import staticProps from 'lib/static-props/faq'

import EcommerceLayout from 'layouts/ecommerce'
import Breadcrumbs from 'components/breadcrumbs'
import SEO from 'components/seo'
import FaqItems from 'components/faq-items'
import Img from 'components/img'
import SinglePageLayout from 'components/single-page-layout'

const FaqPage = ({ items }) => {
  const title = 'Dúvidas Frequentes'
  return (
    <SinglePageLayout>
      <SEO title={title} />
      <h2 className="text-5xl font-bold tracking-tighter text-center">
        {title}
      </h2>
      <div className="py-6">
        <Breadcrumbs
          links={[{ title: 'Sobre nós', href: '/sobre-a-vida-natural' }]}
          className="sm:px-4"
        >
          {title}
        </Breadcrumbs>
        <FaqItems items={items} />
      </div>
      <Img
        className="w-64 max-w-full mx-auto my-6"
        width={300}
        height={240}
        src="/static/svgs/faq.svg"
        alt="Dúvidas frequentes"
      />
    </SinglePageLayout>
  )
}

FaqPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default FaqPage
