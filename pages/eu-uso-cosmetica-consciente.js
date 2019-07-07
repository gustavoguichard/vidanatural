import { Box, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import People from 'src/eu-uso/People'
import sloganImg from 'static/svgs/slogan.svg'
import theme from 'src/ui/theme'

const Page = () => {
  return (
    <Layout>
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
      <People />
    </Layout>
  )
}

export default Page
