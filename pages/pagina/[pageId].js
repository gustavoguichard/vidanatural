import get from 'lodash/get'

import staticPaths from 'lib/static-paths/pagina-uid'
import staticProps from 'lib/static-props/pagina-uid'

import Breadcrumbs from 'components/breadcrumbs'
import ErrorPage from 'pages/404'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

const ContentPage = ({ page }) =>
  get(page, 'id') ? (
    <Layout title={page.title} seo={{ description: page.description }}>
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="px-10">
          <h2 className="text-5xl mt-12 tracking-tighter font-bold">
            {page.title}
          </h2>
          <p className="m-4 text-lg mb-12 max-w-2xl">{page.description}</p>
        </div>
      </Hero>
      <PaperContent>
        <div className="max-w-screen-md m-auto">
          <Breadcrumbs className="-mt-6 mb-6">{page.title}</Breadcrumbs>
        </div>
        <div className="rich-text max-w-screen-sm m-auto">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </div>
      </PaperContent>
    </Layout>
  ) : (
    <ErrorPage />
  )

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
