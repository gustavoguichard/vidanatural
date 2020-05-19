import { Grid, Box, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Img from 'src/components/Img'
import MdContent from 'src/components/MdContent'
import CTAButton from 'src/components/CTAButton'
import sloganImg from 'public/static/svgs/slogan.svg'
import PaperContent from 'src/ui/PaperContent'
import theme from 'lib/theme'
import testimonials from 'data/testimonials'

const ContentPage = ({ testimonial }) => {
  const { content, name, picture, role, location } = testimonial
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
        <Grid container spacing={4} justify="center" alignItems="stretch">
          <Grid item xs={12} sm={8} md={6} css={{ display: 'flex' }}>
            <Img
              className="responsive"
              css={{
                alignSelf: 'flex-end',
              }}
              alt={name}
              src={`/static/images/testimonials/${picture}.jpg`}
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
              {role && <br />}
              {location}
            </Typography>
            <Typography
              css={{ color: theme.palette.primary.light, overflowY: 'auto' }}
              align="left"
              component="div"
              variant="body1"
            >
              <MdContent content={content} />
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

export async function getStaticProps({ params }) {
  const { name } = params
  const testimonial = testimonials.find((t) => t.picture === name)
  return { props: { testimonial } }
}

export async function getStaticPaths() {
  return {
    paths: testimonials.map((t) => ({ params: { name: t.picture } })),
    fallback: false,
  }
}

export default ContentPage
