import FeedSlider from 'components/feed-slider'
import CTAButton from 'components/cta-button'

const HomeFeed = ({ posts }) => (
  <section className="bg-white py-20" id="feed">
    <div className="mx-auto max-w-screen-xl w-full px-4">
      <h3 className="text-center tracking-tight text-4xl font-semibold">
        Blog
      </h3>
      <p className="text-center text-lg text-gray-600">Últimos artigos</p>
      <FeedSlider posts={posts} />
      <p className="mt-4">
        <CTAButton mini href="/blog">
          ver tudo
        </CTAButton>
      </p>
    </div>
  </section>
)

export default HomeFeed
