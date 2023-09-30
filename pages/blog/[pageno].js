import {useRouter} from "next/router";



const pageno= () => {
    const router=useRouter();
    const pageNumber=router.query.pageno;
  return (
    <>
    <h1>MY BLOG CONTENT {pageNumber}</h1>
    
    
    </>
    
  );
};

export default pageno;
