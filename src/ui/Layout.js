import { memo } from 'react'
import Chat from 'src/ui/Chat'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'

const Layout = ({
  children,
  logoCompanion,
  variant = 'primary',
  footerVariant = variant,
  stickBar,
}) => (
  <>
    <Header logoCompanion={logoCompanion} variant={variant} stick={stickBar} />
    <main css={{ flex: 1 }}>{children}</main>
    <Footer variant={footerVariant} />
    <Chat />
  </>
)

export default memo(Layout)
