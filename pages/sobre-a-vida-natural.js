import { Box, Grid, Typography } from '@material-ui/core'

import api from 'lib/api'
import theme from 'lib/theme'

import Hero from 'components/hero'
import IllustratedIngredients from 'components/illustrated-ingredients'
import Layout from 'components/layout'
import TeamMember from 'components/team-member'
import PaperContent from 'components/paper-content'

import sloganImg from 'public/static/svgs/eufaco.svg'

const AboutPage = ({ team }) => {
  return (
    <Layout
      title="Sobre a Vida Natural"
      seo={{
        description:
          'Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele.',
      }}
    >
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
        <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
          Uma empresa feita por <strong>amigos</strong>, unidos pelo propósito
          da <strong>transparência</strong>, que se importam com aquilo que
          colocamos todos os dias no nosso maior orgão de absorção - a pele.
        </Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" css={{ marginBottom: theme.spacing(4) }}>
              Por que fazemos o que fazemos?
            </Typography>
            <Typography component="div" variant="body1">
              <p>
                Produzimos desodorantes, xampus, pó dental, óleos e cremes
                hidratantes elaborados em um processo de produção totalmente
                artesanal, feitos à mão e em pequenos lotes, o que garante a
                entrega de cosméticos únicos, frescos, eficientes e em total
                equilíbrio com o seu corpo e o meio ambiente.
              </p>
              <p>
                Com a nossa linha de cosméticos queremos incentivar um movimento
                para desconstruir ideias, propor mudanças no comportamento e nos
                valores favorecendo um consumo + simples, consciente e em maior
                equilíbrio com a saúde do seu corpo e a natureza.
              </p>
              <p>
                Conservantes sintéticos, parabenos, fragrâncias artificiais,
                derivados de petróleo ou origem animal, não fazem parte da nossa
                produção. Nós acreditamos que um corpo, uma mente e um planeta
                sadios dependem de tudo o que você faz e coloca neles.
              </p>
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
                <TeamMember key={member.picture} {...member.data} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PaperContent>
      <IllustratedIngredients />
    </Layout>
  )
}

export async function getStaticProps() {
  const team = await api.cms.getByTypeAndTags('team_member')
  return { props: { team } }
}

export default AboutPage
