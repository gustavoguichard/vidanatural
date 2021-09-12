import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import { calculatePostReadTime } from 'lib/domain'
import { toDate } from 'lib/utils'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import Badge from 'components/badge'
import Link from 'components/link'
import Img from 'components/img'
import { RichText } from 'prismic-reactjs'
import RelatedProducts from 'components/related-products'

const SinglePostPage = ({ products, author, date, data, tags, excerpt }) => {
  return (
    <>
      <SEO title="Blog" description={excerpt} />
      <nav className="flex items-center justify-between w-full px-4 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-1 w-0 -mt-px">
          <Link
            href="/blog"
            className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700"
          >
            <ArrowNarrowLeftIcon
              className="w-4 h-4 mr-3 text-gray-400"
              aria-hidden="true"
            />
            Voltar ao Blog
          </Link>
        </div>
      </nav>
      <div className="bg-white">
        <div className="max-w-5xl px-4 mx-auto mt-16 sm:mt-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              {data.title}
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-lg text-gray-500 first-letter:uppercase">
              {toDate(date)}
              <span aria-hidden="true"> &middot; </span>
              {calculatePostReadTime(data.body)} de leitura
            </p>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <span className="sr-only">{author?.data?.name}</span>
                {author?.thumbUrl && (
                  <Img
                    className="w-10 h-10 rounded-full"
                    src={author.thumbUrl}
                    alt={author.imageAlt}
                  />
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {author?.data?.name}
                </p>
                {author?.data?.instagram && (
                  <p className="flex space-x-1 text-sm text-gray-500">
                    <a
                      target="_blank"
                      className="text-nature-500 hover:text-nature-600"
                      href={author?.data?.instagram.url}
                      rel="noreferrer"
                    >
                      @
                      {author?.data?.instagram.url.replace(
                        /.+\.com\/([A-Za-z0-9]+)\/?$/,
                        '$1',
                      )}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8">
        <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-nature">
          <RichText render={data.body} />
          <div className="flex flex-wrap gap-1">
            {tags
              .filter((t) => t !== 'institucional')
              .map((tag, idx) => (
                <Badge href={`/tag/${tag}`} key={`tag-${idx}`}>
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <RelatedProducts products={products} maxPerPage={3} />
      </div>
    </>
  )
}

SinglePostPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default SinglePostPage
