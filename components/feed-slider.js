import clamp from 'lodash/clamp'

import { getExcerpt } from 'lib/domain'
import { useWindowDimensions } from 'lib/hooks'

import AuthorCard from 'components/author-card'
import Carousel from 'components/carousel'
import Link from 'components/link'

const FeedSlider = ({ posts }) => {
  const { width } = useWindowDimensions()
  const columns = clamp(Math.floor(width / 320), 1, 4)
  return posts ? (
    <Carousel
      className="mt-8"
      itemWidth={`${96 / columns}%`}
      gap={2}
      NextButton={false}
      PrevButton={false}
    >
      {posts.map((post) => (
        <Link
          className="post-card group block h-full rounded-lg border border-gray-300 hover:border-teal-500 focus:outline-none focus:border-teal-400 focus:border-2 hover:no-underline"
          key={post.id}
          href={`/blog/${post.uid}`}
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="mb-3">
              <h4 className="font-bold tracking-tight mb-2 text-xl leading-tight group-hover:text-teal-600">
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
              className="mt-6 -mb-2"
            />
          </div>
        </Link>
      ))}
    </Carousel>
  ) : null
}

export default FeedSlider
