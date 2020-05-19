import { useInView } from 'react-intersection-observer'
import { Box, Container, Grid } from '@material-ui/core'

import { useIsDesktop } from 'lib/hooks'

import Breadcrumbs from './breadcrumbs'
import GeneralContent from './general-content'
import MobileCTA from './mobile-cta'
import ImageGallery from 'components/image-gallery'

const GeneralProductSale = ({ product = {}, isMobile }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const isDesktop = useIsDesktop()

  return (
    <>
      {isMobile && <MobileCTA visible={visible} product={product} />}
      <Container maxWidth="lg">
        <Box pt={7} pb={6}>
          <Breadcrumbs product={product} />
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
