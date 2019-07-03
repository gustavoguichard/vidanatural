import Link from 'src/components/Link'
import find from 'lodash/find'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
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
import Feature from 'src/home/Feature'
import ProductContainer from 'src/home/ProductContainer'
import SplitProducts from 'src/home/SplitProducts'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import theme from 'src/ui/theme'
import products from 'data/products'

const getProduct = path => find(products, p => p.path === path)
const desodorantePasta = getProduct('desodorante-em-pasta')
const desodoranteRollon = getProduct('desodorante-rollon')
const poDental = getProduct('po-dental')
const hidratante = getProduct('oleo-hidratante')
const rosa = getProduct('rosa-mosqueta')

const Products = ({ isMobile }) => {
  return (
    <>
      <ProductContainer paper product={desodorantePasta}>
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
              src={`/static/images/products/${desodorantePasta.path}.png`}
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
              Sem alumínio, sem triclosan, sem fragrâncias sintéticas, sem sem
              sem!
            </Feature>
          </Box>
        </Grid>
      </ProductContainer>
      <ProductContainer product={desodoranteRollon}>
        <Grid css={{ display: 'flex' }} item xs={12} sm={6} lg={4}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Feature Icon={GiApothecary} title="Nosso Leite de Magnésia">
              Desenvolvido especialmente para ser usado como desodorante.
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
              src={`/static/images/products/${desodoranteRollon.path}.png`}
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
              Sem parabenos, sem triclosan, sem fragrâncias sintéticas, sem sem
              sem!
            </Feature>
            <Feature Icon={GiSuitcase} title="Prático">
              Fácil de aplicar.
              <br />
              Perfeito para o cotidiano.
            </Feature>
          </Box>
        </Grid>
      </ProductContainer>
      <ProductContainer product={poDental}>
        <Grid
          item
          xs={12}
          sm={6}
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
          sm={6}
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
            <Feature Icon={GiHeartBottle} title="Você sem Microplásticos">
              Sem flúor, sem triclosan, sem fragrâncias sintéticas, sem sem sem!
            </Feature>
          </Box>
        </Grid>
      </ProductContainer>
      <SplitProducts product1={hidratante} product2={rosa} />
    </>
  )
}

export default Products
