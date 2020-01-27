import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'

const About = ({ isMobile }) => (
  <Grid container css={{ borderBottom: '10px solid white' }}>
    <Grid item sm={9} md={6} xs={12}>
      <Box css={{ position: 'relative' }} py={isMobile ? 10 : 14}>
        <Container
          maxWidth="xs"
          css={{
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
          }}
        >
          <Typography variant="h2">Uma ideia, um movimento</Typography>
          <Typography
            variant="body1"
            component="div"
            css={{
              marginTop: theme.spacing(5),
              marginBottom: theme.spacing(3),
            }}
          >
            <p>
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis e sustentáveis, com
              fórmulas minimalistas e livre de crueldade contra animais.
            </p>
            <p>
              Com nossos cosméticos queremos incentivar um movimento para
              desconstruir ideias, propor mudanças no comportamento e nos
              valores para favorecer um consumo + simples + consciente e em
              maior equilíbrio com a saúde do seu corpo e do meio ambiente.
            </p>
            <p>
              Queremos que vc possa usar no seu dia-a-dia produtos naturais,
              sustentáveis e altamente eficientes!
            </p>
            <p>Acreditamos na poder desse movimento! Vamos junt@s?</p>
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
