import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import { calculatePostReadTime } from 'lib/domain'
import { cx, toDate } from 'lib/utils'
import ArrowNarrowLeftIcon from '@heroicons/react/solid/ArrowNarrowLeftIcon'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import Badge from 'components/badge'
import Link from 'components/link'
import Img from 'components/img'
import { RichText } from 'prismic-reactjs'
import MoreProducts from 'components/more-products'

const BackButton = () => (
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
)

const SinglePostPage = ({
  products,
  author,
  date,
  data,
  tags,
  excerpt,
  featuredUrl,
}) => {
  return (
    <>
      <SEO title="Blog" description={excerpt} />
      {!featuredUrl && <BackButton />}
      <div
        className={cx(
          'relative px-6 sm:px-12 lg:px-16',
          featuredUrl
            ? 'py-32 bg-gray-800 text-white sm:py-40'
            : 'bg-white text-gray-900 pt-12 sm:pt-16',
        )}
      >
        {featuredUrl && (
          <div className="absolute inset-0 overflow-hidden">
            <Img
              src={featuredUrl}
              alt="Banner"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
        {featuredUrl && (
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />
        )}
        <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-center text-current sm:text-4xl sm:tracking-tight lg:text-5xl">
            {data.title}
          </h1>
          <p
            className={cx(
              'max-w-xl mx-auto mt-5 text-lg first-letter:uppercase',
              featuredUrl ? 'text-white' : 'text-gray-500',
            )}
          >
            {toDate(date)}
            <span aria-hidden="true"> &middot; </span>
            {calculatePostReadTime(data.body)} de leitura
          </p>
          <div className="flex items-center mt-6">
            <div className="shrink-0">
              <span className="sr-only">{author?.data?.name}</span>
              {author?.data?.picture?.url && (
                <Img
                  className={cx(
                    'w-10 h-10 rounded-full',
                    featuredUrl && 'ring ring-white',
                  )}
                  src={author.data.picture.url}
                  alt={author.data.picture.alt}
                />
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-current">
                {author?.data?.name}
              </p>
              {author?.data?.instagram && (
                <p
                  className={cx(
                    'flex space-x-1 text-sm',
                    featuredUrl ? 'text-white' : 'text-gray-500',
                  )}
                >
                  <a
                    target="_blank"
                    className={cx(
                      featuredUrl
                        ? 'text-white hover:underline'
                        : 'text-secondary-500 hover:text-secondary-600',
                    )}
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
      {featuredUrl && <BackButton />}
      <div
        className={cx(
          'relative px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8',
          featuredUrl && 'py-8',
        )}
      >
        <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-secondary">
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
      <MoreProducts products={products} title="Produtos relacionados" />
    </>
  )
}

SinglePostPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default SinglePostPage
