import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import About from 'src/home/About'
import Certified from 'src/home/Certified'
import Hero from 'src/components/Hero'
import Products from 'src/home/Products'
import HomeIngredients from 'src/home/HomeIngredients'
import HomeTestimonials from 'src/home/HomeTestimonials'
import { useIsMobile } from 'utils/responsive'

const Home = () => {
  const isMobile = useIsMobile()
  return (
    <Layout>
      <Hero size="small" background="/static/images/plants.jpg">
        <Typography variant="h2">
          O que sua pele absorve todos os dias?
        </Typography>
      </Hero>
      <Products />
      <About isMobile={isMobile} />
      <Certified isMobile={isMobile} />
      <HomeTestimonials />
      <HomeIngredients />
    </Layout>
  )
}

export default Home
