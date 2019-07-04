import { Box, Card, Container, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import About from 'src/home/About'
import Hero from 'src/components/Hero'
import Products from 'src/home/Products'
import HomeTestimonials from 'src/home/HomeTestimonials'
import theme from 'src/ui/theme'
import { useIsMobile } from 'utils/responsive'

const Index = () => {
  const isMobile = useIsMobile()
  return (
    <Layout>
      <Hero
        size={isMobile ? 'full' : 'medium'}
        background="/static/images/plants.jpg"
      >
        <Typography variant="h2">
          Você se importa com o que sua pele absorve todos os dias?
        </Typography>
      </Hero>
      <Products isMobile={isMobile} />
      <About isMobile={isMobile} />
      <HomeTestimonials isMobile={isMobile} />
    </Layout>
  )
}

export default Index
