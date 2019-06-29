import { memo } from 'react'
import Header from 'src/ui/Header'
import Providers from 'src/core/Providers'

const Layout = ({ children }) => {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  )
}

export default memo(Layout)
