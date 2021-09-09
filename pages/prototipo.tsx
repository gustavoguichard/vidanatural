import staticProps from 'lib/static-props/home'

import Banner from 'components/prototype/banner'
import Blog from 'components/prototype/blog'
import Footer from 'components/prototype/footer'
import Incentives from 'components/prototype/incentives'
import IntroVideo from 'components/prototype/intro-video'
import FlashMessage from 'components/prototype/flash-message'
import Navigation from 'components/prototype/navigation'
import ShopConditions from 'components/prototype/shop-conditions'
import Stats from 'components/prototype/stats'
import HomeTestimonial from 'components/prototype/testimonial'
import TrendingProducts from 'components/prototype/trending-products'
import { HomeBanner, BlogPost, Testimonial } from 'types/cms'
import { VndaProduct } from 'types/vnda'

type Props = {
  banner: HomeBanner
  testimonials: Testimonial[]
  posts: BlogPost[]
  products: VndaProduct[]
}
const Prototipo = ({ banner, testimonials, posts, products }: Props) => {
  return (
    <div className="w-screen">
      <FlashMessage />
      <Navigation />
      <Banner {...banner} />
      <ShopConditions />
      <Incentives />
      <TrendingProducts products={products} />
      <IntroVideo />
      <Stats />
      <HomeTestimonial {...testimonials?.[0]} />
      <Blog posts={posts} />
      <Footer />
    </div>
  )
}

export const getStaticProps = staticProps
export default Prototipo
