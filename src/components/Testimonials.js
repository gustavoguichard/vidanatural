import { memo } from 'react'
import { Grid } from '@material-ui/core'
import reduce from 'lodash/reduce'
import Hero from 'src/components/Hero'
import CTAButton from 'src/components/CTAButton'
import theme from 'src/ui/theme'
import Testimonial from './Testimonial'

const Testimonials = ({ testimonials, showCTA, children, ...props }) => {
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
    <Hero color={theme.palette.primary.dark} maxWidth="lg" {...props}>
      {children}
      <Grid container spacing={4} justify="center" alignItems="stretch">
        {testimonialsToShow.map(testimonial => (
          <Grid
            key={testimonial.picture}
            sm={6 * testimonial.size}
            md={4 * testimonial.size}
            item
          >
            <Testimonial {...testimonial} />
          </Grid>
        ))}
      </Grid>
      {showCTA && (
        <CTAButton
          href="/eu-uso-cosmetica-consciente"
          css={{
            color: theme.palette.text.secondary,
            margin: theme.spacing(4),
          }}
        >
          Mais depoimentos
        </CTAButton>
      )}
    </Hero>
  )
}

export default memo(Testimonials)
