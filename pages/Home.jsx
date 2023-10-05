import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import data from "@/public/stocklist"
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Toast } from '@chakra-ui/react'

const Home = () => {
    const[stock,setStock]=useState("")
//creating a instance to push
    const router=useRouter();
//state for boolean
const [isDisable,setDisable]=useState(true)

    const handleOnSelect = (item) => {
          //item  is the value that is selected,so item is taken as a parameter
        console.log(item)
        setStock(item);
        setDisable(false);
        }
    const formatResult = (item) => {
          return (
            <>
              <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
              <span style={{ display: 'block', textAlign: 'left' }}>{item.symbol}</span>
            </>
          )
        }
//FRTRTTT
    const handleRoute=()=>{
        //if stock is not selected
        if(isDisable){
          window.alert("Please Select a Stock");
          return;
        }

         else router.push({pathname:"/performance",
                     query:stock})
    }
  return (
    <>
    <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            onSelect={handleOnSelect}    //handles when we select a stock
            fuseOptions={{ keys: ["name", "exchange"] }} //KET takes two coloumns..what we want to display in search bar..for that we use resultstringkey
            resultStringKeyName="name"   //after selecting,we see this for a partcular stock
            placeholder='Search for Stock'
            formatResult={formatResult}  
            onClear={()=>setDisable(false)}
            styling={
                {
  backgroundcolor: "whitesmoke",
                }

            }
        
 />
        </div>
        <button style={{backgroundColor:"rgb(147,112,219)",padding:"1px",margin:"2px",marginLeft:"20px",borderRadius:"5px" ,width:"70px",height:"45px",float:"left"}}
        onClick={handleRoute}>Search</button>
    </>
  )
}

export default Home
