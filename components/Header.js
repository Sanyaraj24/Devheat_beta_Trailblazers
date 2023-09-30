import { Button } from "@mui/material"


const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">InvestKRO</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-left">
      <a href="/" className="mr-3 hover:text-gray-900">Dashboard</a>
      <a href="/getStaticProps" className="mr-3 hover:text-gray-900">Top Companies</a>
      <a href="/About" className="mr-3 hover:text-gray-900">About Us</a>
      <a href="/Contact" className="mr-3 hover:text-gray-900">Contact Us</a>
    </nav>
    <div className="container-fluid">
  
    <form className="d-flex" role="search">
      <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
      <Button variant="outlined">Search</Button>
      <button className="btn btn-outline-primary mx-10" type="submit"><a href="/Login">Login</a></button>
     
    </form>
    

    

  </div>
  </div>

</header>
  )
}

export default Header
