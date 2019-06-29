import React from 'react'
import { Paper, Container, Box } from '@material-ui/core'

const PaperContent = ({ children, ...props }) => (
  <Container maxWidth="lg" css={{ zIndex: 3, position: 'relative' }}>
    <Paper css={{ marginBottom: '-3rem', marginTop: '-5rem' }} elevation={20}>
      <Box my={4} p={5} css={{ minHeight: '200vh' }}>
        {children}
      </Box>
    </Paper>
  </Container>
)

export default PaperContent
