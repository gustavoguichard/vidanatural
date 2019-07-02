import { memo } from 'react'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'

const Layout = ({
  children,
  variant = 'primary',
  footerVariant = variant,
  stickBar,
}) => (
  <>
    <Header variant={variant} stick={stickBar} />
    <main css={{ flex: 1 }}>{children}</main>
    <Footer variant={footerVariant} />
  </>
)

export default memo(Layout)
