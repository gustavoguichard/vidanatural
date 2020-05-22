import { Box, Typography } from '@material-ui/core'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/eu-uso'

import Hero from 'components/hero'
import Layout from 'components/layout'
import People from 'components/people'

import sloganImg from 'public/static/svgs/slogan.svg'

const Page = ({ testimonials }) => {
  return (
    <Layout title="Eu uso cosmética consciente!">
      <Hero size="small" background="/static/images/banner.jpg">
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
      <People testimonials={testimonials} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default Page
