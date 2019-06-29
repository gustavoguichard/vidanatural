import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import Layout from 'src/ui/Layout'
import ProTip from 'src/ProTip'
import Link from 'src/components/Link'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  )
}

export default function Index() {
  return (
    <Layout>
      {
        <Container maxWidth="sm">
          <Box my={4} css={{ minHeight: '200vh' }} />
        </Container>
      }
    </Layout>
  )
}
