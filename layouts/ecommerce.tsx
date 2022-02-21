import FlashMessage from 'components/home/flash-message'
import Certifications from 'components/certifications'
import Footer from 'components/footer'
import Navigation from 'components/navigation'
import Notifications from 'components/notifications'
import SearchBar from 'components/header/search-bar'

const EcommerceLayout = (page: React.ReactNode) => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col w-screen min-h-screen">
        <FlashMessage />
        <Navigation />
        {page}
        <Certifications />
        <Footer />
      </div>
      <Notifications />
    </>
  )
}

export default EcommerceLayout
