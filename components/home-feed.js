import FeedSlider from 'components/feed-slider'
import Link from 'components/link'

const HomeFeed = ({ posts }) => (
  <section className="bg-white py-20" id="feed">
    <div className="mx-auto max-w-screen-xl w-full px-4">
      <h3 className="text-center tracking-tight text-4xl font-semibold">
        Blog
      </h3>
      <p className="text-center text-lg text-gray-600">Últimos artigos</p>
      <FeedSlider posts={posts} />
      <Link
        className="ml-6 mt-4 inline-block font-semibold hover:underline"
        href="/blog"
      >
        + ver tudo
      </Link>
    </div>
  </section>
)

export default HomeFeed
