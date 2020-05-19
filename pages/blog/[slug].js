import { Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/blog-uid'
import staticPaths from 'lib/static-paths/blog-uid'

import AuthorCard from 'components/author-card'
import Hero from 'components/hero'
import SinglePageLayout from 'components/single-page-layout'

const SinglePostPage = ({
  featuredUrl,
  titleText,
  author,
  dateFrom,
  readingTime,
  data,
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
            <Typography variant="h2">{titleText}</Typography>
          </Hero>
        )
      }
    >
      {hasFeatured || (
        <Typography variant="h3" css={{ marginBottom: theme.spacing(2) }}>
          {titleText}
        </Typography>
      )}
      <AuthorCard
        author={author}
        readingTime={readingTime}
        dateFrom={dateFrom}
        showAvatar
        top={hasFeatured ? theme.spacing(-3) : 0}
      />
      <Typography
        component="div"
        variant="body1"
        css={{ margin: theme.spacing(4, 0) }}
      >
        <RichText render={data.body} />
      </Typography>
    </SinglePageLayout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default SinglePostPage
