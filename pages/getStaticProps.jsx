import React from 'react'


export const getStaticProps=async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props:{
            data,
        },
    };
};
const About = ({data}) => {
  return (
    <>
    {data.map((curElem)=>{
            return(
            <div key={curElem.id}>
                <h3>{curElem.name}</h3>
                


            </div>);
        })
    }

    
    </>
  )
}

export default About
