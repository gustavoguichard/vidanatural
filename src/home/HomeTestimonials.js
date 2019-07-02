import shuffle from 'lodash/shuffle'
import { Box, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import theme from 'src/ui/theme'
import sloganImg from 'static/images/slogan.svg'
import testimonials from 'data/testimonials'
import Testimonials from 'src/components/Testimonials'

const HomeTestimonials = ({ isMobile }) => {
  const items = useProcessOnce(shuffle, testimonials)
  return (
    <Testimonials
      showCTA
      testimonials={items || []}
      color={theme.palette.primary.main}
      background={isMobile ? null : `/static/images/testimonials.jpg`}
    >
      <Box mb={2} p={3}>
        <img
          css={{
            maxWidth: 400,
            marginBottom: theme.spacing(2),
            filter: 'invert(1)',
          }}
          src={sloganImg}
          alt="Eu uso cosmética consciente"
        />
        <Typography variant="body1">
          Descubra o que motiva as pessoas a usarem os nossos produtos:
        </Typography>
      </Box>
    </Testimonials>
  )
}

export default HomeTestimonials
