import clamp from 'lodash/clamp'
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from '@material-ui/core'

import theme from 'lib/theme'
import { getExcerpt } from 'lib/domain'
import { useWindowDimensions } from 'lib/hooks'

import AuthorCard from 'components/author-card'
import Carousel from 'components/carousel'
import Link from 'components/link'

const HomeFeed = ({ posts }) => {
  const { width } = useWindowDimensions()
  const columns = clamp(Math.floor(width / 320), 1, 4)
  return (
    <Box css={{ backgroundColor: 'white' }} id="feed" py={10}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h3">
          Blog
        </Typography>
        <Typography
          align="center"
          css={{
            fontWeight: 400,
            color: theme.palette.text.hint,
            margin: theme.spacing(2, 2, 4),
          }}
        >
          Últimos artigos
        </Typography>
        <Carousel
          itemWidth={`${100 / columns}%`}
          gap={2}
          NextButton={false}
          PrevButton={false}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href="/blog/[slug]"
              as={`/blog/${post.uid}`}
              css={{
                textDecoration: 'none !important',
                '& > div': {
                  border: `1px solid rgb(226,230,233)`,
                },
                '&:hover > div': {
                  borderColor: 'rgb(185, 191, 198)',
                },
                '&:focus > div': {
                  borderColor: theme.palette.secondary.main,
                  boxShadow: `${theme.palette.secondary.main} 0 0 0 1px inset`,
                },
              }}
            >
              <Card elevation={0} css={{ height: '100%' }}>
                <CardContent
                  css={{
                    padding: theme.spacing(3),
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      css={{ fontWeight: 600, marginBottom: theme.spacing() }}
                    >
                      {post.data.title}
                    </Typography>
                    <Typography css={{ color: theme.palette.text.hint }}>
                      {getExcerpt(post.data.body)}
                    </Typography>
                  </Box>
                  <AuthorCard
                    author={post.author}
                    post={post.data.body}
                    date={post.date}
                    disableLink
                    css={{ margin: theme.spacing(3, 0, -1) }}
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </Carousel>
        <Link
          href="/blog"
          css={{ marginTop: theme.spacing(2), display: 'block' }}
        >
          Ver tudo
        </Link>
      </Container>
    </Box>
  )
}

export default HomeFeed
