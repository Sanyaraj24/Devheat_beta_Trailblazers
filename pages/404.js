import { useRouter } from "next/router";

const Errorpage = () => {
    const router=useRouter();
  return (
    <>
    
    <div id="notfound mx-10">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>We are Sorry,Page Not found!</h2>
            <p>The page you are looking for might have been removed,had its name changed or is temporarily unavaible.</p>
            <a onClick={()=>router.push("/")}>Back to Homepage</a>
        </div>
    </div>
    </>
  )
}

export default Errorpage;
