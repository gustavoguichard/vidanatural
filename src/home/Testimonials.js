import NextLink from 'next/link'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'
import { Grid, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import Hero from 'src/components/Hero'
import CTAButton from 'src/components/CTAButton'
import theme from 'src/ui/theme'
import sloganImg from 'static/images/slogan.svg'
import testimonials from 'data/testimonials'

import Testimonial from './Testimonial'

const Testimonials = () => {
  const shuffled = useProcessOnce(shuffle, testimonials)
  const items = take(shuffled, 3)
  return (
    <Hero
      filter="brightness(0.4) saturate(1.4)"
      background="/static/images/testimonials.jpg"
      maxWidth="lg"
    >
      <img
        css={{
          maxWidth: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
          filter: 'invert(1)',
        }}
        src={sloganImg}
        alt="Eu use cosmética consciente"
      />
      <Typography
        css={{ margin: `${theme.spacing(3)}px !important` }}
        variant="body1"
      >
        Descubra o que motiva as pessoas a usarem os nossos produtos:
      </Typography>
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
