import staticProps from 'lib/static-props/eu-uso'

import Hero from 'components/hero'
import Layout from 'components/layout'
import People from 'components/people'
import SloganSvg from 'components/svg/slogan'

const Page = ({ testimonials }) => (
  <Layout title="Eu uso cosmética consciente!">
    <Hero size="small" background="/static/images/banner.jpg">
      <div className="my-12 py-6 px-16 max-w-screen-md">
        <SloganSvg className="max-w-full h-24 m-auto" />
        <div className="m-4 text-lg">
          Descubra o que motiva as pessoas a usarem os produtos da VN
        </div>
      </div>
    </Hero>
    <People testimonials={testimonials} />
  </Layout>
)

export const getStaticProps = staticProps
export default Page
