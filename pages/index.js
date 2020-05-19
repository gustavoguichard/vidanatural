import { useIsMobile } from 'lib/hooks'

import About from 'src/home/About'
import Certifications from 'components/certifications'
import Hero from 'src/home/HomeHero'
import Layout from 'components/layout'
import Products from 'src/home/Products'
import Testimonials from 'src/home/HomeTestimonials'

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
