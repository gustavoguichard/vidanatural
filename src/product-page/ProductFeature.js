import { GiDrop, GiHeartBottle, GiBeech } from 'react-icons/gi'
import Feature, { featureWrapper } from 'src/home/Feature'
import ProductImg, { wrapperCss } from 'src/home/ProductImg'
import { Grid, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import CTAButton from 'src/components/CTAButton'

const ProductFeature = ({ product }) => (
  <PaperContent>
    <Grid container justify="center">
      <Grid item xs={12} md={10} css={{ textAlign: 'center' }}>
        <Grid spacing={6} justify="center" container>
          <Grid item xs={12} sm={6} md={4} css={wrapperCss}>
            <ProductImg product={product} height={400} />
            <CTAButton href="/onde-encontrar">Onde Encontrar</CTAButton>
          </Grid>
          <Grid
            css={{ display: 'flex', justifyContent: 'center' }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Box {...featureWrapper}>
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
                Sem flúor, sem triclosan, sem fragrâncias sintéticas, sem sem
                sem!
              </Feature>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PaperContent>
)

export default ProductFeature
