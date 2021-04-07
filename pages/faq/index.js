import Img from 'next/image'

import staticProps from 'lib/static-props/faq'

import Breadcrumbs from 'components/breadcrumbs'
import FaqItems from 'components/faq-items'
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
      <div className="max-w-full w-64 my-6 mx-auto">
        <Img
          layout="intrinsic"
          unoptimized
          width={300}
          height={240}
          src="/static/svgs/faq.svg"
          alt="Dúvidas frequentes"
        />
      </div>
    </SinglePageLayout>
  )
}

export const getStaticProps = staticProps
export default FaqPage
