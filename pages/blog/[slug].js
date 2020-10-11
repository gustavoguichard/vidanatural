import theme from 'lib/theme'
import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import AuthorCard from 'components/author-card'
import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import RichText from 'components/rich-text'
import RelatedProducts from 'components/related-products'
import PostTags from 'components/post-tags'
import SinglePageLayout from 'components/single-page-layout'

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
    <SinglePageLayout
      variant={hasFeatured ? 'primary' : 'secondary'}
      title="Blog"
      seo={{
        description: excerpt,
      }}
      hero={
        hasFeatured && (
          <Hero filter="brightness(0.4)" size="medium" background={featuredUrl}>
            <h2 className="text-5xl font-bold tracking-tighter leading-none">
              {data.title}
            </h2>
          </Hero>
        )
      }
    >
      {hasFeatured ? null : (
        <h3 className="mb-4 text-4xl leading-none tracking-tighter font-bold">
          {data.title}
        </h3>
      )}
      <AuthorCard
        author={author}
        post={data.body}
        date={date}
        showAvatar
        style={{ top: hasFeatured ? theme.spacing(-3) : 0 }}
      />
      <Breadcrumbs
        css={{ margin: theme.spacing(hasFeatured ? 1 : 3, 0, 2) }}
        links={[{ title: 'Blog', href: '/blog' }]}
      >
        {data.title}
      </Breadcrumbs>
      <RichText>{data.body}</RichText>
      <PostTags tags={tags} />
      <div className="mt-12">
        <RelatedProducts products={products} maxPerPage={3} />
      </div>
    </SinglePageLayout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default SinglePostPage
