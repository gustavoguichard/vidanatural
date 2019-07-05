import shuffle from 'lodash/shuffle'
import { Box, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import theme from 'src/ui/theme'
import sloganImg from 'static/svgs/slogan.svg'
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
          className="responsive"
          css={{
            height: 70,
            width: 350,
            marginBottom: theme.spacing(2),
            filter: 'invert(1)',
          }}
          src={sloganImg}
          alt="Eu uso cosmética consciente"
        />
      </Box>
    </Testimonials>
  )
}

export default HomeTestimonials
