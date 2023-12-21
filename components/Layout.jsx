import React from 'react'
import { Header, Footer } from './';

const Layout = ({ children }) => {
  return (
    <>
        <img
                src="/Jubla-Welt_u__berlappend_breit.png"
                alt="Jubla Welt"
                className="w-screen"
            />
        <Header />
        {children}
    </>
  )
}

export default Layout