import { Typography } from '@material-ui/core'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import Hero from 'src/components/Hero'
import api from 'lib/api'
import AuthorCard from 'src/blog/AuthorCard'
import parsePost from 'lib/parsers/post'
import { RichText } from 'prismic-reactjs'
import theme from 'lib/theme'

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
  const items = await api.cms.allByTypeAndTags('blog_post')
  return {
    paths: items.map((item) => ({ params: { slug: item.uid } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const authors = await api.cms.allByTypeAndTags('team_member')
  const response = await api.cms.getBySlug('blog_post', slug)
  const props = parsePost(response, authors)
  return { props }
}

export default SinglePostPage
