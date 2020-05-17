import { Typography } from '@material-ui/core'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import Hero from 'src/components/Hero'
import PostPreview from 'src/blog/PostPreview'
import * as cms from 'utils/cms'
import { parsePost } from 'utils/contentParsers'

const BlogPage = ({ posts }) => {
  return (
    <SinglePageLayout
      variant="primary"
      title="Blog"
      seo={{
        description:
          'Leia aqui artigos sobre cosmética natural, produtos orgânicos, veganos, artesanais e DIY (faça você mesmo).',
      }}
      hero={
        <Hero size="small" background="/static/images/banner.jpg">
          <Typography variant="h2">Blog da VN ❤️</Typography>
        </Hero>
      }
    >
      {posts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </SinglePageLayout>
  )
}

export async function getStaticProps() {
  const authors = await cms.allByTypeAndTags('team_member')
  const response = await cms.allByTypeAndTags('blog_post', null, {
    orderings: '[my.blog_post.date desc]',
  })
  const posts = response.map((post) => parsePost(post, authors))
  return { props: { posts } }
}

export default BlogPage
