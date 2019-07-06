import React from 'react'
import { Paper, Container, Box } from '@material-ui/core'
import { useIsMobile } from 'utils/responsive'
import theme from 'src/ui/theme'

const Wrapper = ({
  color = 'white',
  full,
  paperCss,
  overflow,
  overlap = true,
  isMobile,
  noPadding,
  children,
}) => {
  const styles = full
    ? {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }
    : {}
  const marginBottom = overlap ? '-3rem' : 0
  const marginTop = overlap ? '-5rem' : 0
  return isMobile ? (
    <Box css={styles} py={noPadding ? 0 : 8} px={noPadding ? 0 : 5}>
      {children}
    </Box>
  ) : (
    <Paper
      css={{
        zIndex: 3,
        position: 'relative',
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
        px={noPadding ? 0 : 5}
      >
        {children}
      </Box>
    </Paper>
  )
}

const PaperContent = ({ children, style = {}, maxWidth = 'lg', ...props }) => {
  const isMobile = useIsMobile()
  return (
    <Container
      css={{
        backgroundColor: (isMobile && props.color) || 'white',
        padding: isMobile ? 0 : undefined,
      }}
      maxWidth={maxWidth}
    >
      <Wrapper css={style} {...props} isMobile={isMobile}>
        {children}
      </Wrapper>
    </Container>
  )
}

export default PaperContent
