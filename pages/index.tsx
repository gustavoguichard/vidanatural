import EcommerceLayout from 'layouts/ecommerce'
import Feed from 'components/home/feed'
import Testimonials from 'components/testimonials'
import Incentives from 'components/home/incentives'
import IntroVideo from 'components/home/intro-video'
import Stats from 'components/home/stats'

import type { BlogPost, Testimonial } from 'types/cms'
import NewsletterSection from 'components/newsletter-section'

type Props = {
  testimonials: Testimonial[]
  posts: BlogPost[]
}
const Home = ({ testimonials, posts }: Props) => {
  return (
    <>
      <Feed posts={posts} />
      <IntroVideo />
      <Stats />
      <Testimonials testimonials={testimonials} />
      <Incentives />
      <NewsletterSection />
    </>
  )
}

Home.getLayout = EcommerceLayout

export { getStaticProps } from 'lib/static-props/home'
export default Home
