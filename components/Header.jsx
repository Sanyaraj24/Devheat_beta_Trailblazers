//import { Button } from "@mui/material"
import Home from "@/pages/Home"
import { Button, background} from '@chakra-ui/react'
import { color } from "framer-motion"
//import styles from './Header.module.css'
import Image from 'next/image'

//"rgb(147,112,219)"

const Header = () => {
  return (
    <header className="text-white-600 body-font" style={{color:"white",fontFamily:"sans-serif",padding:"0px",margin:"0px"}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left ">
    <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
    <div className="logo">
      <Image src="/mylogo.png" width={50} height={100}></Image>
    </div>
      <span className="ml-3 text-xl" style={{color:"white",fontFamily:"Blippo fantasy",fontSize:"28px",padding:"0px",margin:"0px"}}>Investronaut</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-left">
      <a href="/Portfolio" className="mr-5 hover:text-900"style={{fontFamily:"sans-serif",fontSize:"18px" ,fontWeight:"100"}}>Dashboard</a>
      <a href="/performance" className="mr-5 hover:text-900"style={{fontFamily:"sans-serif",fontSize:"18px"}}>Top Company</a>
      <a href="/About" className="mr-5 hover:text-900"style={{fontFamily:"sans-serif",fontSize:"18px"}}>About Us</a>
      <a href="/Contact" className="mr-5 hover:text-900"style={{fontFamily:"sans-serif",fontSize:"18px"}}>Contact Us</a>
      <span></span>
      
  <Home/>
      <div className="logo">
 
   
  
  <a href="/"><Image src="/login.png" width={60} height={120} style={{backgroundColor:"black", padding:"1px",marginLeft:"250px"}}></Image></a>
  </div>
   </nav>
  
  </div>


</header>
  )
}

export default Header
