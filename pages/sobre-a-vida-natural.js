import { Grid, Paper, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Img from 'src/components/Img'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'

export default function Index() {
  return (
    <Layout>
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">Sobre a Vida Natural</Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="space-between">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" css={{ marginBottom: theme.spacing(4) }}>
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
          <Grid item xs={12} md={4}>
            <Img
              className="responsive"
              src="/static/svgs/care.svg"
              alt="Cuidado"
            />
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}
