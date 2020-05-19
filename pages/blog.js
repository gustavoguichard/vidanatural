import { Box, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/blog'
import { BLOG_DESCRIPTION } from 'lib/constants'

import Hero from 'components/hero'
import PostPreview from 'components/post-preview'
import SinglePageLayout from 'components/single-page-layout'

import sloganImg from 'public/static/svgs/euamo.svg'

const BlogPage = ({ posts }) => {
  const handlePageChange = (_e, newPage) => console.log(newPage)
  return (
    <SinglePageLayout
      variant="primary"
      title="Blog"
      seo={{ description: BLOG_DESCRIPTION }}
      hero={
        <Hero size="small" background="/static/images/banner.jpg">
          <Box mb={2} p={3}>
            <img
              css={{
                maxWidth: 600,
                width: '80vw',
              }}
              src={sloganImg}
              alt="Eu amo | cosmética consciente"
            />
            <Typography
              variant="body1"
              css={{ margin: theme.spacing(4, 2, 0) }}
            >
              Blog da VN - leia artigos sobre cosmética natural, produtos
              orgânicos, veganos, artesanais e dicas de estilo de{' '}
              <strong>vida natural</strong>.
            </Typography>
          </Box>
        </Hero>
      }
    >
      {posts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={10}
          showFirstButton
          showLastButton
          hidePrevButton
          hideNextButton
          color="primary"
          onChange={handlePageChange}
        />
      </Box>
    </SinglePageLayout>
  )
}

export const getStaticProps = staticProps

export default BlogPage
