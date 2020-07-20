import { useState } from 'react'

import staticProps from 'lib/static-props/home'

import About from 'components/home/about'
import Banners from 'components/banners'
import Certifications from 'components/certifications'
import Layout from 'components/layout'
import Products from 'components/home/products'
import Testimonials from 'components/testimonials'
import HomeFeed from 'components/home-feed'

const Home = ({ banners, testimonials, posts, products }) => {
  const [variant, setVariant] = useState('primary')

  return (
    <Layout variant={variant} hideCertifications>
      <Banners banners={banners} setVariant={setVariant} />
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Products products={products} />
      <About />
      <Testimonials testimonials={testimonials} />
      <HomeFeed posts={posts} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default Home
