import { Grid, Box, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticPaths from 'lib/static-paths/eu-uso-uid'
import staticProps from 'lib/static-props/eu-uso-uid'

import Breadcrumbs from 'components/breadcrumbs'
import CTAButton from 'components/cta-button'
import Hero from 'components/hero'
import Img from 'components/img'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

import sloganImg from 'public/static/svgs/slogan.svg'

const ContentPage = ({ data }) => {
  const { content, name, picture, role, location, is_long } = data
  const [firstName] = name.split(' ')
  return (
    <Layout title="Eu uso cosmética consciente!">
      <Hero size="small" background="/static/images/banner.jpg">
        <Box mb={2} p={3}>
          <img
            css={{
              maxWidth: 600,
              width: '80vw',
            }}
            src={sloganImg}
            alt="Eu uso cosmética consciente"
          />
        </Box>
        <Typography variant="body1" css={{ marginBottom: theme.spacing(5) }}>
          Descubra o que motiva {firstName} a usar os produtos da VN
        </Typography>
      </Hero>
      <PaperContent>
        <Breadcrumbs
          css={{ margin: theme.spacing(-3, 0, 3) }}
          links={[{ title: 'Eu uso', href: '/eu-uso-cosmetica-consciente' }]}
        >
          {name}
        </Breadcrumbs>
        <Grid container spacing={4} justify="center" alignItems="stretch">
          <Grid item xs={12} sm={8} md={6} css={{ display: 'flex' }}>
            <Img
              className="responsive"
              css={{
                alignSelf: 'flex-end',
              }}
              alt={name}
              src={picture[is_long ? 'long' : 'square'].url}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            css={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="body1"
              css={{ fontSize: '1.85rem' }}
              component="h1"
            >
              <strong>{name}</strong>
            </Typography>
            <Typography
              variant="body2"
              css={{
                color: theme.palette.text.hint,
                marginBottom: theme.spacing(2),
              }}
            >
              {role}
              {role ? <br /> : null}
              {location}
            </Typography>
            <Typography
              css={{ color: theme.palette.primary.light }}
              align="left"
              component="div"
              variant="body1"
            >
              <RichText render={content} />
            </Typography>
            <CTAButton
              href="/eu-uso-cosmetica-consciente"
              css={{ marginTop: theme.spacing(4) }}
            >
              Mais depoimentos
            </CTAButton>
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
