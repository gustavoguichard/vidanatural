import { useRouter } from 'next/router'

import staticProps from 'lib/static-props/blog'
import { BLOG_DESCRIPTION } from 'lib/constants'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import Breadcrumbs from 'components/breadcrumbs'
import ErrorPage from 'pages/404'
import Pagination from 'components/pagination'
import PostPreview from 'components/post-preview'
import Skeleton from 'components/skeleton/blog-post'

const BlogPage = ({ posts, page = 1, pages }) => {
  const router = useRouter()
  const title = page === 1 ? 'Blog' : `Página ${page} - Blog`
  return router.isFallback || posts.length ? (
    <>
      <SEO title={title} description={BLOG_DESCRIPTION} />
      <Breadcrumbs className="self-start -translate-y-2">Blog</Breadcrumbs>
      {router.isFallback
        ? [...Array(4).keys()].map((i) => <Skeleton key={`skel-${i}`} />)
        : posts.map((post) => <PostPreview key={post.id} {...post} />)}
      <Pagination count={pages} page={page} path="/blog" />
    </>
  ) : (
    <ErrorPage href="/blog" linkText="Voltar ao blog">
      Você veio longe demais
    </ErrorPage>
  )
}

BlogPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default BlogPage
