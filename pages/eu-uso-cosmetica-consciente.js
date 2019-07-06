import React, { useState } from 'react'
import shuffle from 'lodash/shuffle'
import { Box, Dialog, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Testimonial from 'src/components/Testimonial'
import PaperContent from 'src/ui/PaperContent'
import People from 'src/eu-uso/People'
import sloganImg from 'static/svgs/slogan.svg'
import testimonials from 'data/testimonials'
import theme from 'src/ui/theme'

const Page = () => {
  const [current, setCurrent] = useState(null)
  const shuffled = useProcessOnce(shuffle, testimonials)
  const onOpen = index => {
    const testimonial = (shuffled || testimonials)[index]
    setCurrent(testimonial)
  }
  const handleClose = () => setCurrent(null)
  const isOpen = !!current
  return (
    <Layout overlapped>
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Box mb={2} p={3}>
          <img
            css={{
              maxWidth: 600,
              width: '80vw',
            }}
            src={sloganImg}
            alt="Eu uso cosmética consciente"
          />
        </Box>
        <Typography variant="body1" css={{ marginBottom: theme.spacing(5) }}>
          Descubra o que motiva as pessoas a usarem os produtos da VN
        </Typography>
      </Hero>
      <PaperContent
        overflow="hidden"
        noPadding
        color={theme.palette.primary.dark}
      >
        <People onOpen={onOpen} testimonials={shuffled} />
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
    </Layout>
  )
}

export default Page
