import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import About from 'src/home/About'
import Certified from 'src/home/Certified'
import Hero from 'src/components/Hero'
import Products from 'src/home/Products'
import HomeTestimonials from 'src/home/HomeTestimonials'
import { useIsMobile } from 'utils/responsive'

const Page = ({ testimonials }) => {
  const isMobile = useIsMobile()
  return (
    <Layout>
      <Hero background="/static/images/plants.jpg">
        <Typography variant="h2">
          Você se importa com o que sua pele absorve todos os dias?
        </Typography>
      </Hero>
      <Products isMobile={isMobile} />
      <About isMobile={isMobile} />
      <Certified isMobile={isMobile} />
      <HomeTestimonials testimonials={testimonials} isMobile={isMobile} />
    </Layout>
  )
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch(`http://${req.headers.host}/api/testimonials`)
  const { data } = await res.json()
  return { testimonials: data }
}

export default Page
