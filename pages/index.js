import Head from "next/head"
//import Basic from "./company/Basic"
import Home from "./Home"
const index = () => {
  return (
    <>
     <div className="heading">
  <Head>
  <title>Home page</title>
  <meta charset="UTF-8"/>
  <meta name="description" content="Investkro"/>
  <meta name="keywords" content="Investment"/>
  <meta name="author" content=""/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>
</div>
    <Home/>


  
   </>
  )
}

export default index
