import Layout from 'src/ui/Layout'
import About from 'src/home/About'
import Certifications from 'src/components/Certifications'
import Hero from 'src/home/HomeHero'
import Products from 'src/home/Products'
import HomeIngredients from 'src/home/HomeIngredients'
import Testimonials from 'src/components/Testimonials'
import { useIsMobile } from 'utils/responsive'

const Home = () => {
  const isMobile = useIsMobile()
  return (
    <Layout variant="secondary" footerVariant="primary" hideCertifications>
      <Hero />
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Products />
      <About isMobile={isMobile} />
      <HomeIngredients />
      <Testimonials />
    </Layout>
  )
}

export default Home
