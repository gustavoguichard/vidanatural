import React from 'react'
import { Paper, Container, Box } from '@material-ui/core'

const PaperContent = ({ children, overlap = true, ...props }) => {
  const marginBottom = overlap ? '-3rem' : 0
  const marginTop = overlap ? '-5rem' : 0
  return (
    <Container maxWidth="lg" css={{ zIndex: 3, position: 'relative' }}>
      <Paper css={{ marginBottom, marginTop }} elevation={20}>
        <Box my={4} p={5}>
          {children}
        </Box>
      </Paper>
    </Container>
  )
}

export default PaperContent
