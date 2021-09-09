import { getExcerpt, timeSince, calculatePostReadTime } from 'lib/domain'
import Img from 'components/img'

import type { BlogPost } from 'types/cms'
import Link from 'components/link'

type Props = { posts: BlogPost[] }
function Feed({ posts }: Props) {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Do nosso Blog
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Leia mais sobre como ter uma vida + natural.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) =>
            post.thumbUrl ? (
              <div
                key={post.uid}
                className="flex flex-col overflow-hidden border rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Img
                    className="object-cover w-full h-48"
                    src={post.thumbUrl}
                    alt={post.data.title}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-nature-600">
                      <Link
                        href={`/tag/${post.tags[0]}`}
                        className="hover:underline"
                      >
                        {post.tags[0]}
                      </Link>
                    </p>
                    <Link href={`/blog/${post.uid}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.data.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {getExcerpt(post.data.body)}
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      <Link className="block" href={post.author?.permalink}>
                        <span className="sr-only">
                          {post.author?.data?.name}
                        </span>
                        {post.author?.thumbUrl && (
                          <Img
                            className="w-10 h-10 rounded-full"
                            src={post.author.thumbUrl}
                            alt={post.author.imageAlt}
                          />
                        )}
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link
                          href={post.author?.permalink}
                          className="hover:underline"
                        >
                          {post.author?.data?.name}
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {post.date && (
                          <time dateTime={post.date.toString()}>
                            há {timeSince(post.date)}
                          </time>
                        )}
                        <span aria-hidden="true">&middot;</span>
                        <span>
                          {calculatePostReadTime(post.data.body)} de leitura
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  )
}

export default Feed
