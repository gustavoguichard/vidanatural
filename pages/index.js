import { useState } from 'react'

import { useIsMobile } from 'lib/hooks'

import staticProps from 'lib/static-props/home'

import About from 'components/home/about'
import Certifications from 'components/certifications'
import Hero from 'components/home/hero'
import Layout from 'components/layout'
import Products from 'components/home/products'
import Testimonials from 'components/testimonials'
import HomeFeed from 'components/home-feed'

const Home = ({ banners, testimonials, posts }) => {
  const [variant, setVariant] = useState('primary')
  const isMobile = useIsMobile()

  return (
    <Layout variant={variant} hideCertifications>
      <Hero banners={banners} setVariant={setVariant} />
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Products />
      <About isMobile={isMobile} />
      <Testimonials testimonials={testimonials} />
      <HomeFeed posts={posts} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default Home
