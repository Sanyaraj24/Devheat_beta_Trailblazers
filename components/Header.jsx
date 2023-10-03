//import { Button } from "@mui/material"
import Home from "@/pages/Home"
import { Button} from '@chakra-ui/react'
import { color } from "framer-motion"
//import styles from './Header.module.css'


const Header = () => {
  return (
    
    <header className="text-white-600 body-font" style={{color:"black"}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left ">
    <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl" style={{color:"white",fontFamily:"sans-serif",fontSize:"40px"}}>InvestKRO</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-left">
      <a href="/Dashboard" className="mr-5 hover:text-gray-900">Dashboard</a>
      <a href="/performance" className="mr-5 hover:text-gray-900">Top Company</a>
      <a href="/About" className="mr-5 hover:text-gray-900">About Us</a>
      <a href="/Contact" className="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
    
  <Home/>
  <Button colorScheme='teal' size='lg'><a href="/portfolio">
    Login/Signup</a>
  </Button>
  </div>


</header>
  )
}

export default Header
