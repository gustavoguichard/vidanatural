import staticProps from 'lib/static-props/faq'

import Breadcrumbs from 'components/breadcrumbs'
import FaqItems from 'components/faq-items'
import Img from 'components/img'
import SinglePageLayout from 'components/single-page-layout'

const FaqPage = ({ items }) => {
  const title = 'Dúvidas Frequentes'
  return (
    <SinglePageLayout variant="secondary" gray title={title}>
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
        className="max-w-full w-64 md:w-1/3 my-6 mx-auto"
        src="/static/svgs/faq.svg"
        alt="Dúvidas frequentes"
      />
    </SinglePageLayout>
  )
}

export const getStaticProps = staticProps
export default FaqPage
