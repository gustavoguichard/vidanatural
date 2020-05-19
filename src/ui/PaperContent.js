import React from 'react'
import { Box, Container, Paper } from '@material-ui/core'
import { useIsMobile } from 'lib/hooks'
import theme from 'lib/theme'

const PaperContent = ({ children, overlap = true }) => {
  const isMobile = useIsMobile()
  return (
    <Container
      maxWidth="lg"
      css={{ paddingLeft: theme.spacing(5), paddingRight: theme.spacing(5) }}
    >
      {isMobile ? (
        <Box py={8}>{children}</Box>
      ) : (
        <Paper
          css={{
            zIndex: 3,
            position: 'relative',
            marginBottom: overlap ? '-1rem' : 0,
            marginTop: overlap ? '-5rem' : 0,
          }}
          elevation={5}
        >
          <Box my={4} py={8} px={5}>
            {children}
          </Box>
        </Paper>
      )}
    </Container>
  )
}

export default PaperContent
