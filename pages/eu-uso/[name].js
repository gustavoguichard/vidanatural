import { Grid, Box, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Img from 'src/components/Img'
import MdContent from 'src/components/MdContent'
import { GoQuote } from 'react-icons/go'
import sloganImg from 'static/svgs/slogan.svg'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import testimonials from 'data/testimonials'

const ContentPage = ({ testimonial }) => (
  <Layout title="Eu uso cosmética consciente!">
    <Hero size="small" background="/static/images/capa-pb.jpg">
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
        Descubra o que motiva as pessoas a usarem os produtos da VN
      </Typography>
    </Hero>
    <PaperContent>
      <Grid container spacing={4} justify="center" alignItems="stretch">
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
          <Img
            className="responsive"
            css={{
              alignSelf: 'flex-end',
            }}
            alt={testimonial.name}
            src={`/static/images/testimonials/${testimonial.picture}.jpg`}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
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
            <strong>{testimonial.name}</strong>
          </Typography>
          <Typography
            variant="body2"
            css={{
              lineHeight: 1.4,
              fontSize: '.85rem',
              color: theme.palette.text.hint,
              marginBottom: theme.spacing(2),
            }}
          >
            {testimonial.role}
            {testimonial.role && <br />}
            {testimonial.location}
          </Typography>
          <Typography
            css={{ color: theme.palette.primary.light, overflowY: 'auto' }}
            align="left"
            component="div"
            variant="body2"
          >
            <GoQuote css={{ position: 'absolute', fontSize: '0.8rem' }} />
            <MdContent
              css={{
                '& p:first-child': { textIndent: '1.15rem' },
                '&::first-letter': {
                  fontSize: '1.25rem',
                },
              }}
              content={testimonial.content}
            />
          </Typography>
        </Grid>
      </Grid>
    </PaperContent>
  </Layout>
)

ContentPage.getInitialProps = async ({ query }) => {
  const { name } = query
  const filtered = testimonials.filter(t => t.picture === name)
  return { testimonial: filtered[0] || {} }
}

export default ContentPage
