import { memo } from 'react'
import Header from 'src/ui/Header'
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
        {children}
      </div>
    </Providers>
  )
}

export default memo(Layout)
