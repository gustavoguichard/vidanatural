import { useState } from 'react'
import { compose, toLower, deburr } from 'lodash/fp'
import { SearchIcon } from '@heroicons/react/solid'
import { getExcerpt, calculatePostReadTime } from 'lib/domain'
import { toDate } from 'lib/utils'

import staticProps from 'lib/static-props/blog'
import { BLOG_DESCRIPTION } from 'lib/constants'

import EcommerceLayout from 'layouts/ecommerce'
import Badge from 'components/badge'
import Img from 'components/img'
import Link from 'components/link'
import SEO from 'components/seo'

const BlogPage = ({ posts }) => {
  const [search, setSearch] = useState('')

  const sanitize = compose(deburr, toLower)
  const filteredPosts = posts.filter((post) =>
    sanitize(post.data.title).includes(sanitize(search)),
  )
  const newPosts = filteredPosts.slice(0, 5)
  const oldPosts = filteredPosts.slice(5)
  return (
    <>
      <SEO title="Blog" description={BLOG_DESCRIPTION} />
      <div className="flex flex-col items-center w-full bg-white border-b border-gray-200">
        <div className="w-full px-4 pt-12 pb-5 max-w-7xl sm:px-6 lg:px-8 sm:flex sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-bold leading-6 text-gray-900">Blog</h3>
            <p className="max-w-4xl mt-2 text-sm text-gray-500">
              Cosmética natural, produtos orgânicos, veganos, artesanais e dicas
              de estilo de <strong>Vida Natural</strong>.
            </p>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <label htmlFor="mobile-search-candidate" className="sr-only">
              Buscar
            </label>
            <label htmlFor="desktop-search-candidate" className="sr-only">
              Buscar
            </label>
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="desktop-search-candidate"
                  id="desktop-search-candidate"
                  className="w-full py-2 pl-10 border border-gray-300 rounded sm:text-sm"
                  placeholder="Buscar posts"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl gap-3 px-4 py-12 mx-auto min-w-min sm:px-6 lg:px-8">
        {!newPosts.length && (
          <div className="block w-full p-12 text-center border-2 border-gray-300 border-dashed rounded-lg">
            <span className="block mt-2 text-sm font-medium text-gray-900">
              Nenhum resultado encontrado
            </span>
          </div>
        )}
        {newPosts.map((post) => (
          <div
            key={post.uid}
            className="flex flex-col w-full overflow-hidden border rounded-lg sm:flex-row"
          >
            {post.thumbUrl && (
              <div className="flex-shrink-0">
                <Link href={post.permalink}>
                  <Img
                    className="object-cover w-full h-56 sm:w-56 sm:h-full"
                    src={post.thumbUrl}
                    alt={post.data.title}
                  />
                </Link>
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
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {getExcerpt(post.data.body)}
                  </p>
                </Link>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author?.data?.name}</span>
                  {post.author?.data?.picture?.url && (
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
                        {toDate(post.date, true)}
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
        {Boolean(oldPosts.length) && (
          <div className="w-full pb-5 mt-20 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Postagens anteriores
            </h3>
          </div>
        )}
        {oldPosts.map((post) => (
          <div
            key={post.uid}
            className="flex flex-col justify-between flex-1 w-full p-6 border-b last:border-b-0"
          >
            <div className="flex-1">
              <Link
                href={`/blog/${post.uid}`}
                className="block mt-2 text-xl font-semibold text-gray-900 hover:underline"
              >
                {post.data.title}
              </Link>
            </div>
            <div className="flex mt-3 space-x-1 text-sm text-gray-500">
              {post.date && (
                <time dateTime={post.date.toString()}>
                  {toDate(post.date, true)}
                </time>
              )}
              <span aria-hidden="true">&middot;</span>
              <span>{calculatePostReadTime(post.data.body)} de leitura</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

BlogPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default BlogPage
