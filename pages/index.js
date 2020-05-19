import { useIsMobile } from 'lib/hooks'

import About from 'components/home/about'
import Certifications from 'components/certifications'
import Hero from 'components/home/hero'
import Layout from 'components/layout'
import Products from 'components/home/products'
import Testimonials from 'components/home/testimonials'

const Home = () => {
  const isMobile = useIsMobile()
  return (
    <Layout hideCertifications>
      <Hero />
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Products />
      <About isMobile={isMobile} />
      <Testimonials />
    </Layout>
  )
}

export default Home
