import Link from 'src/components/Link'
import find from 'lodash/find'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { FaAngleRight } from 'react-icons/fa'
import {
  GiApothecary,
  GiBiceps,
  GiCurledLeaf,
  GiDaisy,
  GiDrop,
  GiHeartBottle,
  GiSuitcase,
  GiBeech,
} from 'react-icons/gi'
import { FaHandHoldingUsd } from 'react-icons/fa'
import PaperContent from 'src/ui/PaperContent'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'
import products from 'data/products'
import Product from './Product'

const getProduct = path => find(products, p => p.path === path)
const desodorantePasta = getProduct('desodorante-em-pasta')
const desodoranteRollon = getProduct('desodorante-rollon')
const poDental = getProduct('po-dental')
const hidratante = getProduct('oleo-hidratante')
const rosa = getProduct('rosa-mosqueta')
const iconSize = 32

const Feature = ({ Icon, title, children }) => (
  <Box
    alignItems="flex-start"
    className="feature-item"
    display="flex"
    alignSelf="stretch"
    textAlign="left"
  >
    <Icon
      css={{
        color: theme.palette.secondary.main,
        width: iconSize,
        height: iconSize,
        marginRight: theme.spacing(1.5),
      }}
    />
    <Box flex={1} maxWidth={350}>
      <Typography variant="h6">{title}</Typography>
      <Typography
        variant="body1"
        css={{
          color: theme.palette.text.disabled,
          marginTop: theme.spacing(2),
          marginBottom: 0,
          '.feature-item:not(:last-child) &': {
            marginBottom: theme.spacing(6),
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  </Box>
)

const Products = ({ isMobile }) => {
  return (
    <>
      <PaperContent>
        <Box py={isMobile ? 7 : 10}>
          <Grid spacing={3} justify="center" container>
            <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
              <Typography variant="h3">
                Não basta ser natural e sustentável,
                <br />
                tem que ser eficiente
              </Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  color: theme.palette.text.disabled,
                }}
                variant="body1"
              >
                Desodorante em Pasta 40g
              </Typography>
              <CTAButton
                href="/desodorante-em-pasta"
                IconComponent={FaAngleRight}
                color="secondary"
                variant="text"
              >
                Saiba mais
              </CTAButton>
            </Grid>
            <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
              <Grid spacing={6} justify="center" container>
                <Grid css={{ display: 'flex' }} item xs={12} sm={6} lg={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    alignSelf="stretch"
                  >
                    <Feature Icon={GiBiceps} title="Super eficiente">
                      Indicado para altos níveis de atividade.
                      <br />
                      Ele segura mesmo!
                    </Feature>
                    <Feature Icon={GiCurledLeaf} title="Natural de verdade">
                      Feito com ingredientes que você conhece.
                    </Feature>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    [theme.breakpoints.down('md')]: {
                      order: -1,
                    },
                  }}
                >
                  <Link href="/desodorante-em-pasta">
                    <img
                      className="responsive"
                      css={{
                        width: 440,
                        marginTop: theme.spacing(2),
                        marginBottom: theme.spacing(2),
                      }}
                      src={`/static/images/products/${
                        desodorantePasta.path
                      }.png`}
                      alt={desodorantePasta.name}
                    />
                  </Link>
                </Grid>
                <Grid css={{ display: 'flex' }} item xs={12} sm={6} lg={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    alignSelf="stretch"
                  >
                    <Feature Icon={FaHandHoldingUsd} title="Rende muito">
                      É bem econômico!
                      <br />
                      Um potinho rende quase quatro meses.
                    </Feature>
                    <Feature Icon={GiHeartBottle} title="Você sem Parabenos">
                      Sem alumínio, sem triclosan, sem fragrâncias sintéticas,
                      sem sem sem!
                    </Feature>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PaperContent>
      <Container
        maxWidth="lg"
        css={{
          borderBottom: '10px solid white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box py={isMobile ? 7 : 10}>
          <Grid spacing={3} justify="center" container>
            <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
              <Typography variant="h3">Indicado para o dia-a-dia</Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  color: theme.palette.text.disabled,
                }}
                variant="body1"
              >
                Desodorante Rollon 70ml
              </Typography>
              <CTAButton
                href="/desodorante-rollon"
                IconComponent={FaAngleRight}
                color="secondary"
                variant="text"
              >
                Saiba mais
              </CTAButton>
            </Grid>
            <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
              <Grid spacing={6} justify="center" container>
                <Grid css={{ display: 'flex' }} item xs={12} sm={6} lg={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    alignSelf="stretch"
                  >
                    <Feature
                      Icon={GiApothecary}
                      title="Nosso Leite de Magnésia"
                    >
                      Desenvolvido especialmente para ser usado como
                      desodorante.
                    </Feature>
                    <Feature Icon={GiDaisy} title="Fórmula suave">
                      Indicado para peles sensíveis.
                    </Feature>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    [theme.breakpoints.down('md')]: {
                      order: -1,
                    },
                  }}
                >
                  <Link href="/desodorante-rollon">
                    <img
                      className="responsive"
                      css={{
                        maxHeight: 500,
                        marginTop: theme.spacing(2),
                        marginBottom: theme.spacing(2),
                      }}
                      src={`/static/images/products/${
                        desodoranteRollon.path
                      }.png`}
                      alt={desodoranteRollon.name}
                    />
                  </Link>
                </Grid>
                <Grid css={{ display: 'flex' }} item xs={12} sm={6} lg={4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    alignSelf="stretch"
                  >
                    <Feature Icon={GiHeartBottle} title="Você sem Alumínio">
                      Sem parabenos, sem triclosan, sem fragrâncias sintéticas,
                      sem sem sem!
                    </Feature>
                    <Feature Icon={GiSuitcase} title="Prático">
                      Fácil de aplicar.
                      <br />
                      Perfeito para o cotidiano.
                    </Feature>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        maxWidth="lg"
        css={{
          borderBottom: '10px solid white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box py={isMobile ? 7 : 10}>
          <Grid spacing={3} justify="center" container>
            <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
              <Typography variant="h3">
                Diferente por ser o mais natural
              </Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  color: theme.palette.text.disabled,
                }}
                variant="body1"
              >
                Pó Dental 20g
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
              <Grid spacing={6} justify="center" container>
                <Grid
                  item
                  xs={12}
                  md={4}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    [theme.breakpoints.down('md')]: {
                      order: -1,
                    },
                  }}
                >
                  <Link href="/po-dental">
                    <img
                      className="responsive"
                      css={{
                        maxHeight: 500,
                        marginTop: theme.spacing(2),
                        marginBottom: theme.spacing(2),
                      }}
                      src={`/static/images/products/${poDental.path}.png`}
                      alt={poDental.name}
                    />
                  </Link>
                </Grid>
                <Grid
                  css={{ display: 'flex', justifyContent: 'center' }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    alignSelf="stretch"
                  >
                    <Feature Icon={GiBeech} title="Mais natural impossível">
                      Feito com apenas três ingredientes.
                      <br />
                      Casca de juá, tea tree e hortelã.
                    </Feature>
                    <Feature Icon={GiDrop} title="Limpa mesmo">
                      O pó do juá é um saponáceo e antisséptico natural.
                      <br />
                      Não abrasivo.
                    </Feature>
                    <Feature
                      Icon={GiHeartBottle}
                      title="Você sem Microplásticos"
                    >
                      Sem flúor, sem triclosan, sem fragrâncias sintéticas, sem
                      sem sem!
                    </Feature>
                    <CTAButton
                      center={false}
                      href="/po-dental"
                      IconComponent={FaAngleRight}
                      color="secondary"
                      variant="text"
                      css={{ alignSelf: 'flex-start' }}
                    >
                      Saiba mais
                    </CTAButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <PaperContent overflow="hidden" noPadding css={{ marginTop: 0 }}>
        <Grid css={{ minHeight: '60vh' }} container>
          <Grid
            item
            css={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            xs={12}
            md={6}
          >
            <BackgroundImg
              css={{ filter: 'brightness(0.3) saturate(1.3)' }}
              src="/static/images/ruiva.jpg"
            />
            <div
              css={{
                position: 'relative',
                zIndex: 2,
                padding: theme.spacing(5),
                color: 'white',
                maxWidth: 500,
              }}
            >
              <Typography variant="h3" color="textSecondary">
                Óleo Hidratante 150ml
              </Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                }}
                variant="body1"
                color="textSecondary"
              >
                Óleo 100% vegetal extraído a frio, o que preserva as
                características naturais. Hidrata e nutre a pele.
              </Typography>
              <CTAButton
                href="/desodorante-rollon"
                IconComponent={FaAngleRight}
                color="inherit"
                variant="text"
              >
                Saiba mais
              </CTAButton>
              <Link href="/oleo-hidratante">
                <img
                  className="responsive"
                  css={{
                    maxHeight: 400,
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(4),
                  }}
                  src={`/static/images/products/${hidratante.path}.png`}
                  alt={hidratante.name}
                />
              </Link>
            </div>
          </Grid>
          <Grid
            item
            css={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            xs={12}
            md={6}
          >
            <BackgroundImg
              css={{ filter: 'brightness(0.3) saturate(1.3)' }}
              src="/static/images/rosa.jpg"
            />
            <div
              css={{
                position: 'relative',
                zIndex: 2,
                padding: theme.spacing(5),
                color: 'white',
              }}
            >
              <Typography variant="h3" color="textSecondary">
                Rosa Mosqueta 30ml
              </Typography>
              <Typography
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                }}
                variant="body1"
                color="textSecondary"
              >
                Cuidado e reparo para a pele. Conhecido por sua ação
                regeneradora. Óleo 100% vegetal, extraído a frio.
              </Typography>
              <CTAButton
                href="/desodorante-rollon"
                IconComponent={FaAngleRight}
                color="inherit"
                variant="text"
              >
                Saiba Mais
              </CTAButton>
              <Link href="/rosa-mosqueta">
                <img
                  className="responsive"
                  css={{
                    maxHeight: 400,
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(4),
                  }}
                  src={`/static/images/products/${rosa.path}.png`}
                  alt={rosa.name}
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </PaperContent>
    </>
  )
}

export default Products
