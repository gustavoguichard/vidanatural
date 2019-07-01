import { memo } from 'react'
import { useCroods } from 'croods'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'

const Layout = ({ children, variant = 'primary', stickBar }) => {
  const [state] = useCroods({ name: 'produtos', fetchOnMount: true })
  return (
    <>
      <Header variant={variant} stick={stickBar} />
      <main css={{ flex: 1 }}>{children}</main>
      <Footer varian={variant} />
    </>
  )
}

export default memo(Layout)
