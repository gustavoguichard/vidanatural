import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import AuthorCard from 'components/author-card'
import Breadcrumbs from 'components/breadcrumbs'
import RichText from 'components/rich-text'
import RelatedProducts from 'components/related-products'
import PostTags from 'components/post-tags'

const SinglePostPage = ({
  products,
  featuredUrl,
  author,
  date,
  data,
  tags,
  excerpt,
}) => {
  const hasFeatured = !!featuredUrl
  return (
    <>
      <SEO title="Blog" description={excerpt} />
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-base font-semibold tracking-wide text-center uppercase text-nature-600">
              Blog
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-center text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {data.title}
            </p>
            <AuthorCard
              author={author}
              post={data.body}
              date={date}
              showAvatar
            />
          </div>
        </div>
      </div>
      <Breadcrumbs
        className={hasFeatured ? 'my-2' : 'mt-6 mb-4'}
        links={[{ title: 'Blog', href: '/blog' }]}
      >
        {data.title}
      </Breadcrumbs>
      <RichText>{data.body}</RichText>
      <PostTags tags={tags} />
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
