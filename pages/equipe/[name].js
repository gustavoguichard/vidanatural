import get from 'lodash/get'
import { Grid, Box, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/equipe-uid'
import staticPaths from 'lib/static-paths/equipe-uid'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import Img from 'components/img'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'
import SocialLinks from 'components/social-links'

import sloganImg from 'public/static/svgs/eufaco.svg'

const MemberPage = ({ name, picture, role, bio, ...props }) => {
  const [firstName] = name.split(' ')
  return (
    <Layout title={`${firstName} usa cosmética consciente!`}>
      <Hero size="small" background="/static/images/banner.jpg">
        <Box mb={2} px={3} pt={3}>
          <img
            css={{
              maxWidth: 600,
              width: '80vw',
            }}
            src={sloganImg}
            alt="Eu faço | cosmética consciente"
          />
        </Box>
        <Typography variant="body1" css={{ marginBottom: theme.spacing(5) }}>
          Conheça quem faz a <strong>Vida Natural</strong> acontecer!
        </Typography>
      </Hero>
      <PaperContent maxWidth="md">
        <Breadcrumbs
          css={{ margin: theme.spacing(-3, 0, 3) }}
          links={[
            { title: 'Equipe', href: '/sobre-a-vida-natural#quem-somos' },
          ]}
        >
          {firstName}
        </Breadcrumbs>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={8} md={6} css={{ display: 'flex' }}>
            <Img
              className="responsive"
              css={{
                alignSelf: 'flex-end',
              }}
              alt={get(picture, 'alt')}
              src={get(picture, 'big.url')}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
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
                fontWeight: 'bold',
              }}
            >
              {role}
            </Typography>
            <Typography align="left" component="div" variant="body1">
              <RichText render={bio} />
            </Typography>
            <SocialLinks {...props} />
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default MemberPage
