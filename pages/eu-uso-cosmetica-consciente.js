import staticProps from 'lib/static-props/eu-uso'

import EcommerceLayout from 'layouts/ecommerce'
import Hero from 'components/hero'
import SEO from 'components/seo'
import People from 'components/people'
import SloganSvg from 'components/svg/slogan'

const TestimonialsPage = ({ testimonials }) => (
  <div>
    <SEO title="Eu uso cosmética consciente!" />
    <Hero size="small" background="/static/images/banner.jpg">
      <div className="max-w-screen-md px-16 py-6 my-12">
        <SloganSvg className="h-24 max-w-full m-auto" />
        <div className="m-4 text-lg">
          Descubra o que motiva as pessoas a usarem os produtos da VN
        </div>
      </div>
    </Hero>
    <People testimonials={testimonials} />
  </div>
)

TestimonialsPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default TestimonialsPage
