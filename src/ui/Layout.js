import { memo, useEffect } from 'react'
import loadScript from 'simple-load-script'
import { useAmp } from 'next/amp'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'

const Layout = ({
  children,
  logoCompanion,
  variant = 'primary',
  footerVariant = variant,
  stickBar,
}) => {
  const isAmp = useAmp()
  useEffect(() => {
    isAmp || loadScript('https://wchat.freshchat.com/js/widget.js')
  }, [])
  return (
    <>
      <Header
        logoCompanion={logoCompanion}
        variant={variant}
        stick={stickBar}
      />
      <main css={{ flex: 1 }}>{children}</main>
      <Footer variant={footerVariant} />
    </>
  )
}

export default memo(Layout)
