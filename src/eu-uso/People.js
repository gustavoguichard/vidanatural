import { useState, memo } from 'react'
import shuffle from 'lodash/shuffle'
import { Box, Dialog } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import Testimonial from 'src/components/Testimonial'
import PaperContent from 'src/ui/PaperContent'
import testimonials from 'data/testimonials'
import theme from 'src/ui/theme'
import Masonry from 'src/components/Masonry'
import Person from 'src/eu-uso/Person'

const People = () => {
  const [current, setCurrent] = useState(null)
  const shuffled = useProcessOnce(shuffle, testimonials)
  const onOpen = index => {
    const testimonial = shuffled[index]
    setCurrent(testimonial)
  }
  const handleClose = () => setCurrent(null)
  const isOpen = !!current

  return (
    <PaperContent
      overflow="hidden"
      noPadding
      color={theme.palette.primary.dark}
    >
      <Masonry>
        {shuffled.map((testimonial, index) => (
          <Person onOpen={onOpen} index={index} key={index} {...testimonial} />
        ))}
      </Masonry>
      <Dialog
        scroll="body"
        PaperComponent={'div'}
        PaperProps={{
          style: {
            margin: 20,
            maxWidth: 600,
          },
        }}
        onClose={handleClose}
        open={isOpen}
      >
        <Testimonial {...current} />
      </Dialog>
    </PaperContent>
  )
}

export default memo(People)
