import { Grid, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'
import Member from 'src/about/Member'
import theme from 'src/ui/theme'
import team from 'data/team'

export default function Index() {
  return (
    <Layout>
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">Sobre a Vida Natural</Typography>
        <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
          Uma empresa feita por <strong>amigos</strong>, unidos pelo propósito
          da <strong>transparência</strong>, que se importam com aquilo que
          colocamos todos os dias no nosso maior orgão de absorção - a pele.
        </Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="center">
          <Grid item xs={11} sm={8}>
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
            <Grid container justify="center" spacing={3}>
              {team.map(member => (
                <Member key={member.picture} {...member} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Typography
              variant="h4"
              css={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(4),
              }}
            >
              Ingredientes que usamos
            </Typography>
            <Typography variant="body1">Em breve...</Typography>
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}
