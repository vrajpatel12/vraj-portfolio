import React from 'react'
import Contact from './contact'
import Footer from './footer'
import Header from './header'

const Layout=({children}) =>{
  return (
    <>
        <Header>
        </Header>
        {children}
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default Layout