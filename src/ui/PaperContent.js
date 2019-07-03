import React from 'react'
import { Paper, Container, Box } from '@material-ui/core'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const PaperContent = ({
  children,
  color = 'white',
  full,
  overlap = true,
  maxWidth = 'lg',
  noPadding,
  paperCss,
  overflow,
  ...props
}) => {
  const isMobile = useIsMobile()
  const marginBottom = overlap ? '-3rem' : 0
  const marginTop = overlap ? '-5rem' : 0
  const styles = full
    ? {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }
    : {}
  return (
    <Container maxWidth={maxWidth} css={{ zIndex: 3, position: 'relative' }}>
      <Paper
        css={{
          backgroundColor: color,
          marginBottom,
          marginTop,
          minHeight: full ? '100vh' : null,
          overflow,
          ...paperCss,
        }}
        elevation={5}
      >
        <Box
          css={styles}
          my={noPadding ? 0 : 4}
          py={noPadding ? 0 : 8}
          px={noPadding ? 0 : isMobile ? 2 : 5}
        >
          {children}
        </Box>
      </Paper>
    </Container>
  )
}

export default PaperContent
