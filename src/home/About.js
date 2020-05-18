import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'

const Section = ({ title, children, isMobile }) => (
  <Grid item sm={9} md={6} xs={12}>
    <Box css={{ position: 'relative' }} py={isMobile ? 10 : 14}>
      <Container
        maxWidth="xs"
        css={{
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Typography
          variant="body1"
          component="div"
          css={{ margin: theme.spacing(5, 0) }}
        >
          {children}
        </Typography>
      </Container>
    </Box>
  </Grid>
)

const Image = ({ src, order = 0 }) => (
  <Grid
    item
    xs={12}
    md={6}
    sm={3}
    css={{
      position: 'relative',
      minHeight: 300,
      [theme.breakpoints.down('xs')]: { order },
    }}
  >
    <BackgroundImg src={src} />
  </Grid>
)

const About = ({ isMobile }) => (
  <Grid container css={{ borderBottom: '10px solid white' }}>
    <Image src={'/static/images/afro.jpg'} />
    <Section title="Uma ideia, um movimento" isMobile={isMobile}>
      <p>
        Nossos cosméticos são feitos a mão, produzidos em pequenos lotes, com
        ingredientes naturais, biodegradáveis e sustentáveis, com fórmulas
        minimalistas e livre de crueldade contra animais.
      </p>
      <p>
        Com nossos cosméticos queremos incentivar um movimento para desconstruir
        ideias, propor mudanças no comportamento e nos valores para favorecer um
        consumo + simples + consciente e em maior equilíbrio com a saúde do seu
        corpo e do meio ambiente.
      </p>
    </Section>
    <Section title="Produtos de alta qualidade" isMobile={isMobile}>
      <p>
        Queremos que vc possa usar no seu dia a dia produtos naturais,
        sustentáveis e altamente eficientes!
      </p>
      <p>Acreditamos no poder desse movimento! Vamos junt@s?</p>
      <CTAButton href="/sobre-a-vida-natural" center={false}>
        Saiba mais
      </CTAButton>
    </Section>
    <Image order={-1} src={'/static/images/maos.jpg'} />
  </Grid>
)

export default About
