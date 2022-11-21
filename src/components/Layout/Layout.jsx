import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import Routers from 'routers/Routers'

const Layout = () => {
  return (
   <>
        <Header/>
           <Routers />
        <Footer/>
   </>
  )
}

export default Layout