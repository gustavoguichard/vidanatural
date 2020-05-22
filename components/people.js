import { memo } from 'react'
import { Container, Paper } from '@material-ui/core'

import theme from 'lib/theme'

import Masonry from 'components/masonry'
import Person from 'components/person'

const People = ({ testimonials }) => {
  return (
    <Container maxWidth="lg">
      <Paper
        css={{
          backgroundColor: theme.palette.primary.dark,
          overflow: 'hidden',
          marginBottom: '-1rem',
          marginTop: '-5rem',
          WebkitMaskImage:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)',
        }}
      >
        <Masonry>
          {testimonials.map((testimonial, index) => (
            <Person key={index} {...testimonial} />
          ))}
        </Masonry>
      </Paper>
    </Container>
  )
}

export default memo(People)
