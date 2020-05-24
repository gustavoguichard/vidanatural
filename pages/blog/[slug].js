import { Box, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import AuthorCard from 'components/author-card'
import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
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
            <Typography variant="h2">{data.title}</Typography>
          </Hero>
        )
      }
    >
      {hasFeatured ? null : (
        <Typography variant="h3" css={{ marginBottom: theme.spacing(2) }}>
          {data.title}
        </Typography>
      )}
      <AuthorCard
        author={author}
        post={data.body}
        date={date}
        showAvatar
        top={hasFeatured ? theme.spacing(-3) : 0}
      />
      <Breadcrumbs
        css={{ margin: theme.spacing(hasFeatured ? 1 : 3, 0, 2) }}
        links={[{ title: 'Blog', href: '/blog' }]}
      >
        {data.title}
      </Breadcrumbs>
      <Typography component="div" variant="body1">
        <RichText render={data.body} />
      </Typography>
      <PostTags tags={tags} />
      <Box mt={6}>
        <RelatedProducts products={products} />
      </Box>
    </SinglePageLayout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default SinglePostPage
