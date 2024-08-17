//import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import Routers from '../routes/Routers'
import Navbarmain from '../components/Navbar/Navbarmain'

function Layout() {
  return (
    <>
      <Navbarmain/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout