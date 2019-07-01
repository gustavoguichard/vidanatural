import NextLink from 'next/link'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'
import { Box, Grid, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import Hero from 'src/components/Hero'
import CTAButton from 'src/components/CTAButton'
import theme from 'src/ui/theme'
import sloganImg from 'static/images/slogan.svg'
import testimonials from 'data/testimonials'

import Testimonial from './Testimonial'

const Testimonials = ({ isMobile }) => {
  const shuffled = useProcessOnce(shuffle, testimonials)
  const items = take(shuffled, 3)
  return (
    <Hero
      filter="brightness(0.4) saturate(1.4)"
      background={isMobile ? null : `/static/images/testimonials.jpg`}
      maxWidth="lg"
      textShadow={false}
    >
      <Box mb={2} p={3}>
        <img
          css={{
            maxWidth: 400,
            marginBottom: theme.spacing(2),
            filter: 'invert(1)',
          }}
          src={sloganImg}
          alt="Eu use cosmética consciente"
        />
        <Typography variant="body1">
          Descubra o que motiva as pessoas a usarem os nossos produtos:
        </Typography>
      </Box>
      <Grid container spacing={4} justify="center" alignItems="stretch">
        {items.map(testimonial => (
          <Testimonial key={testimonial.picture} {...testimonial} />
        ))}
      </Grid>
      <NextLink href="/eu-uso-cosmetica-consciente">
        <CTAButton color="secondary">Ver mais depoimentos</CTAButton>
      </NextLink>
    </Hero>
  )
}

export default Testimonials
