import Head from "next/head"
//import Basic from "./company/Basic"

import { useState } from "react"

//import Home from "./Home"
const index = () => {

    
  return (
    <>
    
  <Head>
  <title>Home page</title>
  <meta charset="UTF-8"/>
  <meta name="description" content="Investkro"/>
  <meta name="keywords" content="Investment"/>
  <meta name="author" content=""/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>
<br></br>
<br></br>
<div className="myheading" style={{fontFamily:"Bodoni MT",fontSize:"45px",color:"white",margin:"15px"}}>
Welcome to Invstronaut : Your Gateway to Intelligent Investing<br></br>
</div>
<div className="myheading2" style={{fontFamily:"Bodoni MT",fontSize:"40px",color:"white",margin:"15px"}}>
Start Your Journey to Financial Freedom Today!
</div>
<section id="read-more" style={{fontFamily:"Bodoni MT",fontSize:"20px",color:"white",margin:"15px"}}>
    <h2>Learn More About Stocks</h2>
    <a href="./Readmore">Read More</a>
</section>







  
  
   </>
  )
}

export default index
