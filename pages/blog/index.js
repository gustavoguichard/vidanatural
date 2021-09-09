import { useRouter } from 'next/router'

import staticProps from 'lib/static-props/blog'
import { BLOG_DESCRIPTION } from 'lib/constants'

import Breadcrumbs from 'components/breadcrumbs'
import ErrorPage from 'pages/404'
import Hero from 'components/hero'
import Pagination from 'components/pagination'
import PostPreview from 'components/post-preview'
import SinglePageLayout from 'components/single-page-layout'
import SloganSvg from 'components/svg/slogan-amo'
import Skeleton from 'components/skeleton/blog-post'

const BlogPage = ({ posts, page = 1, pages }) => {
  const router = useRouter()
  const title = page === 1 ? 'Blog' : `Página ${page} - Blog`
  return router.isFallback || posts.length ? (
    <SinglePageLayout
      title={title}
      seo={{ description: BLOG_DESCRIPTION }}
      hero={
        <Hero size="small" background="/static/images/banner.jpg">
          <div className="max-w-screen-sm px-16 py-6 my-12">
            <SloganSvg className="h-24 max-w-full" />
            <p className="mt-8 text-lg">
              {title} da VN - leia artigos sobre cosmética natural, produtos
              orgânicos, veganos, artesanais e dicas de estilo de{' '}
              <strong>vida natural</strong>.
            </p>
          </div>
        </Hero>
      }
    >
      <Breadcrumbs className="self-start -translate-y-2">Blog</Breadcrumbs>
      {router.isFallback
        ? [...Array(4).keys()].map((i) => <Skeleton key={`skel-${i}`} />)
        : posts.map((post) => <PostPreview key={post.id} {...post} />)}
      <Pagination count={pages} page={page} path="/blog" />
    </SinglePageLayout>
  ) : (
    <ErrorPage href="/blog" linkText="Voltar ao blog">
      Você veio longe demais
    </ErrorPage>
  )
}

export const getStaticProps = staticProps
export default BlogPage
