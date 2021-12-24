import { getExcerpt, timeSince, calculatePostReadTime } from 'lib/domain'
import Img from 'components/img'

import type { BlogPost } from 'types/cms'
import Link from 'components/link'
import Badge from 'components/badge'

type Props = { posts: BlogPost[] }
function Feed({ posts }: Props) {
  return (
    <div className="relative px-4 py-16 bg-gray-50 sm:px-6 lg:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Do nosso Blog
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Leia mais sobre como ter uma vida + natural.{' '}
            <Link href="/blog" className="font-medium group text-secondary-500">
              Ver blog
              <span
                className="inline-block transition group-hover:translate-x-1"
                aria-hidden="true"
              >
                {' '}
                &rarr;
              </span>
            </Link>
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
          {posts.map((post) => (
            <div
              key={post.uid}
              className="flex flex-col overflow-hidden border rounded-lg last:hidden sm:last:flex lg:last:hidden"
            >
              {post.thumbUrl && (
                <div className="shrink-0">
                  <Img
                    className="object-cover w-full h-48"
                    src={post.thumbUrl}
                    alt={post.data.title}
                  />
                </div>
              )}
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1 text-sm font-medium text-secondary-600">
                    {post.tags.map((tag) => (
                      <Badge key={`${post.id}-${tag}`} href={`/tag/${tag}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.uid}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.data.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-5">
                      {getExcerpt(post.data.body)}
                    </p>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="shrink-0">
                    <span className="sr-only">{post.author?.data?.name}</span>
                    {post.author?.data.picture?.url && (
                      <Img
                        className="w-10 h-10 rounded-full"
                        src={post.author.data.picture.url}
                        alt={post.author.data.picture.alt}
                      />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author?.data?.name}
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed
