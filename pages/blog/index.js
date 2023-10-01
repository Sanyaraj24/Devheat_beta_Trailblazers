import React from 'react'


export const index=async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props:{
            data,
        },
    };
};
const blog = ({data}) => {
  return (
    <>
    {data.map((curElem)=>{
            return(
            <div key={curElem.id}>
                <h3>{curElem.id}</h3>
                <h2>{curElem.title}</h2>
                


            </div>);
        })
    }

    
    </>
  )
}

export default About
