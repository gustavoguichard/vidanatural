import get from 'lodash/get'
import { Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'
import staticPaths from 'lib/static-paths/pagina-uid'
import staticProps from 'lib/static-props/pagina-uid'

import ErrorPage from 'pages/404'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

const ContentPage = ({ page }) =>
  get(page, 'id') ? (
    <Layout title={page.title} seo={{ description: page.description }}>
      <Hero size="small" background="/static/images/banner.jpg">
        <Typography variant="h2">{page.title}</Typography>
        <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
          {page.description}
        </Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <div dangerouslySetInnerHTML={{ __html: page.body }} />
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  ) : (
    <ErrorPage />
  )

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
