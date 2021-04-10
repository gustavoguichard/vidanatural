import staticProps from 'lib/static-props/home'

import About from 'components/home/about'
import Banner from 'components/banner'
import Certifications from 'components/certifications'
import Layout from 'components/layout'
import HomeProducts from 'components/home/products'
import Testimonials from 'components/testimonials'
import HomeFeed from 'components/home-feed'

const Home = ({ banner, testimonials, posts, products }) => (
  <Layout variant="secondary" hideCertifications>
    <Banner {...banner} />
    <Certifications />
    <HomeProducts products={products} />
    <About />
    <Testimonials testimonials={testimonials} />
    <HomeFeed posts={posts} />
  </Layout>
)

export const getStaticProps = staticProps
export default Home
