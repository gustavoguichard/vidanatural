import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'

const About = ({ isMobile }) => (
  <Grid container>
    <Grid item sm={9} md={6} xs={12}>
      <Box css={{ position: 'relative' }} py={isMobile ? 10 : 14}>
        <Container maxWidth="xs">
          <Typography variant="h2">Sobre nós</Typography>
          <Typography
            variant="body1"
            css={{
              marginTop: theme.spacing(5),
              marginBottom: theme.spacing(3),
            }}
          >
            Produzimos desodorantes, shampoos, óleos hidratantes e pó dental
            elaborados em um processo de produção totalmente artesanal, 100%
            feitos à mão e em pequenos lotes, o que garante a entrega de
            cosméticos únicos, frescos, eficientes e em total equilíbrio com o
            seu corpo e o meio ambiente.
            <br />
            <br />
            Com a nossa linha de cosméticos queremos incentivar um movimento
            para desconstruir ideias, propor mudanças no comportamento e nos
            valores para favorecer um consumo + simples, consciente e em maior
            equilíbrio com a saúde do seu corpo e a natureza.
          </Typography>
          <CTAButton href="/sobre-a-vida-natural" center={false}>
            Saiba mais
          </CTAButton>
        </Container>
      </Box>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sm={3}
      css={{
        position: 'relative',
        minHeight: 300,
        [theme.breakpoints.down('xs')]: {
          order: -1,
        },
      }}
    >
      <BackgroundImg src="/static/images/maos.jpg" />
    </Grid>
  </Grid>
)

export default About
