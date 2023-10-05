//import Footer from '@/components/Footer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
//import React, { useLayoutEffect } from 'react'
//import Mainpage from './Mainpage'
//import Main from './Main'
import '@/styles/globals.css'
//import LiveChart from './LiveChart'

//import Home from './Home'
export default function App({ Component, pageProps }) {
  return( 
  <>
  
  <div className="mypage">
  
  <Header/>

  <div className="container mx-auto min-h-screen" >
  
 
  <Component {...pageProps} />
  </div>
<Footer/>
  </div>
  

  </>)
}