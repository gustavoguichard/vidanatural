import React from 'react'
import { Paper, Container, Typography, Box } from '@material-ui/core'
import Layout from 'src/ui/Layout'

const PaperContent = ({ children, ...props }) => (
  <Container maxWidth="lg" css={{ zIndex: 3, position: 'relative' }}>
    <Paper css={{ marginBottom: '-3rem', marginTop: '-3rem' }} elevation={20}>
      <Box my={4} p={5} css={{ minHeight: '200vh' }}>
        {children}
      </Box>
    </Paper>
  </Container>
)

export default PaperContent
