import React from 'react'
import { Paper, Container, Typography, Box } from '@material-ui/core'
import Layout from 'src/ui/Layout'

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
