import { Avatar, Box, Typography } from '@material-ui/core'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import Hero from 'src/components/Hero'
import Link from 'src/components/Link'
import * as cms from 'utils/cms'
import AuthorCard from 'src/blog/AuthorCard'
import { parsePost } from 'utils/contentParsers'
import { RichText } from 'prismic-reactjs'
// import api from 'utils/api'
import theme from 'src/ui/theme'

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

export async function getStaticPaths() {
  const items = await cms.allByTypeAndTags('blog_post')
  return {
    paths: items.map((item) => ({ params: { slug: item.uid } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const authors = await cms.allByTypeAndTags('team_member')
  const response = await cms.getBySlug('blog_post', slug)
  const props = parsePost(response, authors)
  return { props }
}

export default SinglePostPage
