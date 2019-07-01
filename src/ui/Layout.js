import { memo } from 'react'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Providers from 'src/core/Providers'

const Layout = ({ children, variant = 'primary', stickBar }) => (
  <Providers>
    <Header variant={variant} stick={stickBar} />
    <main css={{ flex: 1 }}>{children}</main>
    <Footer varian={variant} />
  </Providers>
)

export default memo(Layout)
