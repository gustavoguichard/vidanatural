import { memo } from 'react'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Providers from 'src/core/Providers'

import homeBgImg from 'static/images/vn_capa.png'

const Layout = ({ children }) => {
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
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}

export default memo(Layout)
