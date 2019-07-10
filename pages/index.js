import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import About from 'src/home/About'
import Certified from 'src/home/Certified'
import Hero from 'src/components/Hero'
import Products from 'src/home/Products'
import HomeTestimonials from 'src/home/HomeTestimonials'
import { useIsMobile } from 'utils/responsive'

const Page = ({ stars }) => {
  console.log(stars)
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
      <HomeTestimonials isMobile={isMobile} />
    </Layout>
  )
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
