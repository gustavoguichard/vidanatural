import { memo } from 'react'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Providers from 'src/core/Providers'

import homeBgImg from 'static/images/vn_capa.png'

const Layout = ({ children, stickBar }) => {
  return (
    <Providers>
      <div
        css={{
          backgroundImage: `url(${homeBgImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Header stick={stickBar} />
        <main css={{ marginTop: stickBar ? 48 : -119.3 }}>{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}

export default memo(Layout)
