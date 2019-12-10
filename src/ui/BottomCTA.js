import { Box } from '@material-ui/core'
import { useScrollDirection } from 'utils/hooks'

const BottomCTA = ({ children }) => {
  const scrollDirection = useScrollDirection()
  return (
    <Box
      position="fixed"
      css={{
        transition: 'all .45s ease-in-out',
      }}
      bottom={scrollDirection === 'DOWN' ? 0 : -100}
      right={0}
      left={0}
      zIndex={1000}
    >
      {children}
    </Box>
  )
}

export default BottomCTA
