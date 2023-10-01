import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function Basic() {
    const[record,setRecord]=useState([])
    useEffect(()=>{
        fetch(`https://api.twelvedata.com/stocks?country=India`)
        .then(response=>response.json())
        .then(data=>setRecord(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    <div>
    <ul >
    {record.data && record.data.map((list,index)=>{
    return (
        
    <li key={index}> {list.name}</li>)


})}
   
 </ul>
    </div>
    </>
  )
}

export default Basic

