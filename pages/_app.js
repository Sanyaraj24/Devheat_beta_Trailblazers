import Header from '@/components/Header'
import Footer from '@/components/Footer'
//import React, { useLayoutEffect } from 'react'
//import Mainpage from './Mainpage'
//import Main from './Main'
//import Stock from './Stock'
import '@/styles/globals.css'

//import Home from './Home'
export default function App({ Component, pageProps }) {
  return( 
  <>
  
    
  
  <Header/>
  <div className="mypage">


  <div className="container mx-auto min-h-screen" >
  
 
  <Component {...pageProps} />
  </div>
  </div>
  <Footer/>

  </>)
}
