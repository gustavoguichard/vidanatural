import EcommerceLayout from 'layouts/ecommerce'
import Banner from 'components/banner'
import Feed from 'components/home/feed'
import Testimonials from 'components/testimonials'
import Incentives from 'components/home/incentives'
import IntroVideo from 'components/home/intro-video'
import ShopConditions from 'components/home/shop-conditions'
import Stats from 'components/home/stats'
import TrendingProducts from 'components/home/trending-products'

import type { HomeBanner, BlogPost, Testimonial } from 'types/cms'
import type { VndaProduct } from 'types/vnda'
import NewsletterSection from 'components/newsletter-section'

type Props = {
  banner: HomeBanner
  testimonials: Testimonial[]
  posts: BlogPost[]
  products: VndaProduct[]
}
const Home = ({ banner, testimonials, posts, products }: Props) => {
  return (
    <>
      <div className="flex flex-col ">
        <Banner {...banner} />
        <ShopConditions />
      </div>
      <Incentives />
      <TrendingProducts products={products} />
      <IntroVideo />
      <Stats />
      <Testimonials testimonials={testimonials} />
      <NewsletterSection />
      <Feed posts={posts} />
    </>
  )
}

Home.getLayout = EcommerceLayout

export { getStaticProps } from 'lib/static-props/home'
export default Home
