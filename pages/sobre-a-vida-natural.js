import { Box, Grid, Typography } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/sobre-a-vida-natural'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import IllustratedIngredients from 'components/illustrated-ingredients'
import Layout from 'components/layout'
import TeamMember from 'components/team-member'
import PaperContent from 'components/paper-content'

import sloganImg from 'public/static/svgs/eufaco.svg'

const AboutPage = ({ team, page }) => {
  return (
    <Layout
      title="Sobre a Vida Natural"
      seo={{
        description:
          'Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele.',
      }}
    >
      <Hero size="small" background="/static/images/banner.jpg">
        <Box mb={2} px={3} pt={3} pb={2}>
          <img
            css={{
              maxWidth: 600,
              width: '80vw',
            }}
            src={sloganImg}
            alt="Eu faço | cosmética consciente"
          />
        </Box>
        <Typography
          component="div"
          variant="body1"
          css={{ margin: theme.spacing(0, 3, 3) }}
        >
          <RichText render={page.data.banner_description} />
        </Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Breadcrumbs css={{ margin: theme.spacing(-3, 0, 3) }}>
              Sobre a VN
            </Breadcrumbs>
            <Typography
              component="div"
              css={{ marginBottom: theme.spacing(4) }}
            >
              <RichText render={page.data.content} />
            </Typography>
          </Grid>
          <Grid id="quem-somos" item xs={12}>
            <Typography
              variant="h4"
              align="center"
              css={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(4),
              }}
            >
              Quem somos?
            </Typography>
            <Grid container spacing={4} justify="center" alignItems="stretch">
              {team.map((member) => (
                <TeamMember key={member.uid} {...member.data} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PaperContent>
      <IllustratedIngredients {...page.data} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default AboutPage
