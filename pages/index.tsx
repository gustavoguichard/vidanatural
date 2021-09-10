import staticProps from 'lib/static-props/home'

import Banner from 'components/banner'
import Cart from 'components/cart'
import Feed from 'components/home/feed'
import FlashMessage from 'components/home/flash-message'
import Certifications from 'components/certifications'
import Footer from 'components/footer'
import Testimonials from 'components/testimonials'
import Incentives from 'components/home/incentives'
import IntroVideo from 'components/home/intro-video'
import Navigation from 'components/navigation'
import Notifications from 'components/notifications'
import SearchBar from 'components/header/search-bar'
import ShopConditions from 'components/home/shop-conditions'
import Stats from 'components/home/stats'
import TrendingProducts from 'components/home/trending-products'

import type { HomeBanner, BlogPost, Testimonial } from 'types/cms'
import type { VndaProduct } from 'types/vnda'

type Props = {
  banner: HomeBanner
  testimonials: Testimonial[]
  posts: BlogPost[]
  products: VndaProduct[]
}
const Home = ({ banner, testimonials, posts, products }: Props) => {
  return (
    <>
      <SearchBar />
      <div className="w-screen">
        <FlashMessage />
        <Navigation />
        <div className="flex flex-col ">
          <Banner {...banner} />
          <ShopConditions />
        </div>
        <Incentives />
        <TrendingProducts products={products} />
        <IntroVideo />
        <Stats />
        <Testimonials testimonials={testimonials} />
        <Feed posts={posts} />
        <Certifications />
        <Footer />
      </div>
      <Cart />
      <Notifications />
    </>
  )
}

export const getStaticProps = staticProps
export default Home
