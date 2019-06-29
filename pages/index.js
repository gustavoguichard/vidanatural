import React from 'react'
import { Paper, Container, Typography, Box, MuiLink } from '@material-ui/core'
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
      <Container maxWidth="lg" css={{ zIndex: 3, position: 'relative' }}>
        <Paper css={{ marginBottom: '-3rem' }} elevation={20}>
          <Box my={4} css={{ minHeight: '200vh' }} />
        </Paper>
      </Container>
    </Layout>
  )
}
