import { useRouter } from 'next/router'
import isEmpty from 'lodash/isEmpty'
import startCase from 'lodash/startCase'
import { Container, Grid, Typography, useTheme } from '@material-ui/core'

import staticProps from 'lib/static-props/tag-uid'
import staticPaths from 'lib/static-paths/tag-uid'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/home/hero'
import Layout from 'components/layout'
import PostPreview from 'components/post-preview'
import PostSkeleton from 'components/skeleton/blog-post'
import ProductGrid from 'components/product-grid'
import ProductFaq from 'components/products/faq'
import Testimonials from 'components/testimonials'

const TagPage = ({ banners, products, posts, testimonials, faqItems }) => {
  const theme = useTheme()
  const router = useRouter()
  const title = `Tag: ${startCase(router.query.uid)}`
  const hero = isEmpty(banners) ? null : (
    <Hero banners={banners} setVariant={() => {}} />
  )
  const emptyPage =
    [banners, products, posts, testimonials, faqItems].every(isEmpty) &&
    !router.isFallback
  return (
    <Layout title={title} stickBar>
      {hero}
      <Container
        css={{
          padding: theme.spacing(hero ? 8 : 18, 3, 4),
          borderBottom: '10px solid white',
        }}
        maxWidth="md"
      >
        <Breadcrumbs>{title}</Breadcrumbs>
        {router.isFallback || !isEmpty(posts) ? (
          <>
            <Typography gutterBottom variant="h2">
              Posts no blog
            </Typography>
            {router.isFallback
              ? [...Array(2).keys()].map(PostSkeleton)
              : posts.map((post) => <PostPreview key={post.id} {...post} />)}
          </>
        ) : null}
        {isEmpty(products) ? null : (
          <ProductGrid products={products} title="Produtos relacionados" />
        )}
        {emptyPage && (
          <Typography gutterBottom variant="h2">
            Nenhum conteúdo para a {title}
          </Typography>
        )}
      </Container>
      <ProductFaq items={faqItems} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default TagPage
