import get from 'lodash/get'
import { Grid, Box, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Img from 'src/components/Img'
import { RichText } from 'prismic-reactjs'
import CTAButton from 'src/components/CTAButton'
import SocialLinks from 'src/components/SocialLinks'
import sloganImg from 'public/static/svgs/eufaco.svg'
import PaperContent from 'src/ui/PaperContent'
import theme from 'lib/theme'
import api from 'lib/api'

const MemberPage = ({ name, picture, role, bio, ...props }) => {
  const fullName = get(name, '0.text', '')
  const [firstName] = fullName.split(' ')
  return (
    <Layout title={`${firstName} usa cosmética consciente!`}>
      <Hero size="small" background="/static/images/banner.jpg">
        <Box mb={2} p={3}>
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
      <PaperContent>
        <Grid container spacing={4} justify="center" alignItems="stretch">
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
              <strong>{fullName}</strong>
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
            <Typography
              css={{ color: theme.palette.primary.light, overflowY: 'auto' }}
              align="left"
              component="div"
              variant="body1"
            >
              <RichText render={bio} />
            </Typography>
            <SocialLinks {...props} />
            <CTAButton
              href="/sobre-a-vida-natural#quem-somos"
              css={{ marginTop: theme.spacing(4) }}
            >
              Conheça toda a Equipe VN
            </CTAButton>
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}

export async function getStaticPaths() {
  const items = await api.cms.allByTypeAndTags('team_member')
  return {
    paths: items.map((item) => ({ params: { name: item.uid } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { name } = params
  const props = await api.cms.getBySlug('team_member', name)
  return { props: { ...props.data } }
}

export default MemberPage
