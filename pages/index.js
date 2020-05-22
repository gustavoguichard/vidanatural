import { useIsMobile } from 'lib/hooks'

import staticProps from 'lib/static-props/home'

import About from 'components/home/about'
import Certifications from 'components/certifications'
import Hero from 'components/home/hero'
import Layout from 'components/layout'
import Products from 'components/home/products'
import Testimonials from 'components/home/testimonials'

const Home = ({ testimonials }) => {
  const isMobile = useIsMobile()
  return (
    <Layout hideCertifications>
      <Hero />
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Products />
      <About isMobile={isMobile} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default Home
