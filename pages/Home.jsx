import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

function Home() {
    const [data,setData]=useState([])
    const [records,setRecords]=useState(data)
    useEffect(()=>{
        axios.get(`https://api.twelvedata.com/stocks?country=India`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
    const Filter=(event)=>{
        setRecords(data.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    }
  return (
    <div className="box">
        <div className="box2">
            <input typr="text" className='form-control'onChange={Filter}/>
            <table className='table'>
                <tbody>
                    {records.data && records.data.map((d,i)=>(
                        <tr key={i}><td>{d.id}</td>
                        <td>{d.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
   
  )
}

export default Home
