import { useMediaQuery } from '@material-ui/core'
import theme from 'src/ui/theme'

// export const isRetina = () => window.devicePixelRatio > 1.3

export const iOS =
  process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

export const useIsMobile = () => {
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return !matches
}

export const useIsTablet = () => {
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return matches
}

export const useIsDesktop = () => {
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)
  return matches
}
