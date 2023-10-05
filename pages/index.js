import Head from "next/head"
//import Basic from "./company/Basic"


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
Welcome to Investronaut : Your Gateway to Intelligent Investing<br></br>
</div>
<div className="myheading2" style={{fontFamily:"Bodoni MT",fontSize:"40px",color:"white",margin:"15px"}}>
Start Your Journey to Financial Freedom Today!
</div>
<section id="read-more" style={{fontFamily:"Bodoni MT",fontSize:"20px",color:"white",margin:"15px"}}>
    <h2><b>Learn More About Stocks</b></h2>
    <a href="./Readmore" style={{color:" rgb(147,112,219)"}}>Read More</a>
</section>

{/* <div className="App" style={{color:"white"}}>
        <h3> Register User </h3>
        <input type="text" placeholder="Email..." 
        onChange={(event) => {
          setRegisterEmail(event.target.value);
          }} />
        <input type="password"  placeholder="Password..." 
         onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}> Create User</button>
      </div> */}

      {/* <div>
        <h3> Login </h3>
        <input placeholder="Email..." type="text" value={loginEmail}
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input placeholder="Password..." type="password" value={loginPassword}
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}> Login</button>
      </div> */}
{/* 
      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}







  
  
   </>
  )
}

export default index
