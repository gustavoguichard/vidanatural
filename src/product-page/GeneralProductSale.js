import { useInView } from 'react-intersection-observer'
import { Box, Container, Grid } from '@material-ui/core'
import ImageGallery from 'src/product-page/ImageGallery'
import MobileCTA from 'src/product-page/MobileCTA'
import GeneralContent from 'src/product-page/GeneralContent'
import { useIsDesktop } from 'lib/hooks'

const GeneralProductSale = ({ product = {}, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const isDesktop = useIsDesktop()

  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <Container maxWidth="lg">
        <Box pt={12} pb={6}>
          <Grid spacing={4} container justify="center">
            <Grid item xs={12} md={6}>
              <ImageGallery product={product} isDesktop={isDesktop} />
            </Grid>
            <GeneralContent ref={ref} product={product} isDesktop={isDesktop} />
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default GeneralProductSale
