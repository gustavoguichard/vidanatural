import { memo } from 'react'
import { useScrollTrigger } from '@material-ui/core'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Providers from 'src/core/Providers'
import { useIsMobile } from 'utils/responsive'

const Layout = ({ children, stickBar }) => {
  const isMobile = useIsMobile()
  const hasScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: process.env.browser ? window() : undefined,
  })
  const sticky = stickBar || isMobile || hasScrolled
  return (
    <Providers>
      <Header sticky={sticky} />
      <main css={{ marginTop: sticky ? 0 : -119.3 }}>{children}</main>
      <Footer />
    </Providers>
  )
}

export default memo(Layout)
