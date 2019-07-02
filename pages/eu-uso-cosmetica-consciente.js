import React from 'react'
import { Box } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'
import sloganImg from 'static/svgs/slogan.svg'
import theme from 'src/ui/theme'

const Page = () => {
  return (
    <Layout>
      <Hero
        filter="brightness(0.4) saturate(1.3)"
        background="/static/images/testimonials.jpg"
      >
        <Box mb={2} p={3}>
          <img
            css={{
              filter: 'invert(1)',
              marginBottom: theme.spacing(2),
              maxWidth: 600,
              width: '80vw',
            }}
            src={sloganImg}
            alt="Eu uso cosmética consciente"
          />
        </Box>
      </Hero>
      <PaperContent />
    </Layout>
  )
}

export default Page
