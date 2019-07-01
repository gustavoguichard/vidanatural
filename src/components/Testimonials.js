import NextLink from 'next/link'
import { Grid } from '@material-ui/core'
import Hero from 'src/components/Hero'
import CTAButton from 'src/components/CTAButton'
import Testimonial from './Testimonial'

const Testimonials = ({ showCTA, testimonials, children, ...props }) => (
  <Hero filter="brightness(0.4) saturate(1.4)" maxWidth="lg" {...props}>
    {children}
    <Grid container spacing={4} justify="center" alignItems="stretch">
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial.picture} {...testimonial} />
      ))}
    </Grid>
    {showCTA && (
      <NextLink href="/eu-uso-cosmetica-consciente">
        <CTAButton color="secondary">Ver todos os depoimentos</CTAButton>
      </NextLink>
    )}
  </Hero>
)

export default Testimonials
