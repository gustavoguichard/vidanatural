import clamp from 'lodash/clamp'

import theme from 'lib/theme'
import { getExcerpt } from 'lib/domain'
import { useWindowDimensions } from 'lib/hooks'

import AuthorCard from 'components/author-card'
import Carousel from 'components/carousel'
import Link from 'next/link'

const HomeFeed = ({ posts }) => {
  const { width } = useWindowDimensions()
  const columns = clamp(Math.floor(width / 320), 1, 4)
  return (
    <section className="bg-white py-20" id="feed">
      <div className="mx-auto max-w-screen-xl w-full px-6">
        <h3 className="text-center tracking-tight text-4xl font-semibold">
          Blog
        </h3>
        <p className="text-center text-lg text-gray-600">Últimos artigos</p>
        <Carousel
          className="mt-8"
          itemWidth={`${96 / columns}%`}
          gap={2}
          NextButton={false}
          PrevButton={false}
        >
          {posts.map((post) => (
            <Link key={post.id} href="/blog/[slug]" as={`/blog/${post.uid}`}>
              <a className="group block h-full rounded-lg border border-gray-300 hover:border-green-500 focus:outline-none focus:border-green-500 focus:border-2 hover:no-underline">
                <div className="p-6 flex flex-col justify-between h-full">
                  <div className="mb-3">
                    <h4 className="font-bold tracking-tight mb-2 text-xl leading-tight">
                      {post.data.title}
                    </h4>
                    <p className="text-base text-gray-600">
                      {getExcerpt(post.data.body)}
                    </p>
                  </div>
                  <AuthorCard
                    author={post.author}
                    post={post.data.body}
                    date={post.date}
                    disableLink
                    css={{ margin: theme.spacing(3, 0, -1) }}
                  />
                </div>
              </a>
            </Link>
          ))}
        </Carousel>
        <Link href="/blog">
          <a className="ml-6 mt-4 inline-block font-semibold hover:underline">
            + ver tudo
          </a>
        </Link>
      </div>
    </section>
  )
}

export default HomeFeed
