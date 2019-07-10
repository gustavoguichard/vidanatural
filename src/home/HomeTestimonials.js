import shuffle from 'lodash/shuffle'
import { Box } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import sloganImg from 'static/svgs/slogan.svg'
import Testimonials from 'src/components/Testimonials'
import Img from 'src/components/Img'
import testimonials from 'data/testimonials'
import theme from 'src/ui/theme'

const HomeTestimonials = () => {
  const items = useProcessOnce(shuffle, testimonials)
  return (
    <Testimonials
      testimonials={items}
      color={theme.palette.primary.main}
      background="/static/images/plants.jpg"
    >
      <Box mb={2} p={3}>
        <Img
          className="responsive"
          css={{
            height: 70,
            width: 350,
            marginBottom: theme.spacing(2),
          }}
          src={sloganImg}
          alt="Eu uso cosmética consciente"
        />
      </Box>
    </Testimonials>
  )
}

export default HomeTestimonials
