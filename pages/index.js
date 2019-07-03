import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Products from 'src/home/Products'
import Testimonials from 'src/home/HomeTestimonials'
import { useIsMobile } from 'utils/responsive'

const Index = () => {
  const isMobile = useIsMobile()
  return (
    <Layout>
      <Hero
        size={isMobile ? 'full' : 'small'}
        filter="brightness(0.4) saturate(1.8)"
        background="/static/images/plants.jpg"
      >
        <Typography variant="h2">
          Você se importa com o que sua pele absorve todos os dias?
        </Typography>
      </Hero>
      <Products isMobile={isMobile} />
      <Testimonials isMobile={isMobile} />
    </Layout>
  )
}

export default Index
