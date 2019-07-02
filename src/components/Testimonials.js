import { memo } from 'react'
import NextLink from 'next/link'
import { Grid } from '@material-ui/core'
import reduce from 'lodash/reduce'
import Hero from 'src/components/Hero'
import CTAButton from 'src/components/CTAButton'
import theme from 'src/ui/theme'
import Testimonial from './Testimonial'

const Testimonials = ({ showCTA, testimonials, children, ...props }) => {
  const [testimonialsToShow] = reduce(
    testimonials,
    (all, test) => {
      const [list, size] = all
      if (size >= 3 || (size === 2 && test.size > 1)) return all
      return [[...list, test], size + test.size]
    },
    [[], 0],
  )
  return (
    <Hero
      color={theme.palette.primary.dark}
      filter="brightness(0.4) saturate(1.4)"
      maxWidth="lg"
      {...props}
    >
      {children}
      <Grid container spacing={4} justify="center" alignItems="stretch">
        {testimonialsToShow.map(testimonial => (
          <Testimonial key={testimonial.picture} {...testimonial} />
        ))}
      </Grid>
      {showCTA && (
        <NextLink href="/eu-uso-cosmetica-consciente">
          <CTAButton>Ver todos os depoimentos</CTAButton>
        </NextLink>
      )}
    </Hero>
  )
}

export default memo(Testimonials)
