import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
  import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text} from '@chakra-ui/react'
  import styles from './performance.module.css'

//import Graph from '@/components/Graph'
import dynamic from 'next/dynamic'
const Graph=dynamic(()=>import('../components/Graph'))





import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const performance = () => {
 const router=useRouter();
 //destructuring..whtver we getting from router
 const [interval,setInterval]=useState("1day")
 const [outputsize,setoutputsize]=useState(200)
 const [data,setData]=useState()

 //for performance
 const [r,setr]=useState("");

 
 
 useEffect(()=>{
  fetch(`https://api.twelvedata.com/time_series?symbol=${router.query.symbol}&interval=${interval}&order=ASC&outputsize=${outputsize}&timezone=Asia/Singapore&apikey=2f1528b54964479e97389fac289659eb`)
  .then(res=>res.json()).then(D=>{setData(D);console.log(D)})


  fetch(`https://api.twelvedata.com/quote?symbol=${router.query.symbol}&apikey=2f1528b54964479e97389fac289659eb`)
.then((res)=>res.json())
.then((r)=>setr(r));
},[interval,outputsize])


return(
  <>
  <Box style={{
    backgroundColor:"black",
    marginLeft:"70px",
    width:"1360px",
    marginTop:"300px",
    height:"1500px",
    borderRadius:"10px",
    opacity:"2",
    border:"3px"
    
  }}
    >
  <div className="main">
<div className={styles.head}>
        {router.query.name}
 </div>

 <div className="stati">
        <Stat>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
            23.36%
          </StatHelpText>
        </Stat>
 </div>
 <div className="graph">
 {data && <Graph graphData={data}/>}
 </div>
<div className={styles.todayprice}>
   <div className={styles.per}>Performance</div>
    <br></br>
   <div className={styles.box1}>
        <Stat>
          <StatLabel> Today's Low</StatLabel>
          <StatNumber>{r.open}</StatNumber>
        </Stat>
   </div>
   <div className={styles.box2}>
        <Stat>
          <StatLabel>Today's High</StatLabel>
          <StatNumber>{r.close}</StatNumber>
        </Stat>
   </div>
   <hr width="70%" 
        size="20" 
        align="center"color='grey'></hr>
    <br></br>
    <br></br>
  <div className={styles.box3}>
  <Stat>
          <StatLabel>52 Week Low</StatLabel>
          <StatNumber>{r.low}</StatNumber>
        </Stat>
  </div>
  <div className={styles.box4}>
  <Stat>
          <StatLabel>52 Week High</StatLabel>
          <StatNumber>{r.high}</StatNumber>
        </Stat>
  </div>
  <hr width="100%" 
        size="20" 
        align="center"></hr>
  <br></br>
<div className={styles.peri}>
  <div className={styles.b1}><Stat>
          <StatLabel>Percent Change</StatLabel>
          <StatNumber>{r.percent_change}</StatNumber>
        </Stat>

   </div>
   <div className={styles.b2}><Stat>
          <StatLabel>Prev. Close</StatLabel>
          <StatNumber>{r.previous_close}</StatNumber>
        </Stat></div>
   <div className={styles.b3}><Stat>
          <StatLabel>Volume</StatLabel>
          <StatNumber>{r.volume}</StatNumber>
        </Stat>

    </div>
</div>
</div>
<br></br>
{/*
<div className={styles.about}>
  <div className={styles.head2}>
    About Company
  </div>
<Card>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <div className={styles.a1}>
        <Heading size='xs'>
          Industry
        </Heading>
        </div>
        <div className={styles.a2}><Text pt='2' fontSize='sm'>
          Financial 
        </Text></div>
        
      </Box>
      <Box>
      <div className={styles.a3}>
        <Heading size='xs'>
          Website
        </Heading></div>
        <div className={styles.a4}><Text pt='2' fontSize='sm'>
          wwww.sbi.co.in
        </Text></div>
        
      </Box>
      <Box>
      <div className={styles.a5}>
        <Heading size='xs'>
          Description
        </Heading></div>
        <div className={styles.a6}><Text pt='2'>
          See a detailed analysis of all your business clients.
        </Text></div>
      </Box>
      <Box>
      <div className={styles.a7}>
        <Heading size='xs'>
          Symbol
        </Heading></div>
        <div className={styles.a8}><Text pt='2' fontSize='sm'>
          See the
        </Text></div>
      </Box>
    </Stack>
  </CardBody>
</Card>

</div>*/}
<br>
</br>
<br></br>
<div className={styles.buysell}>
           <button className={styles.buy}>Buy Stock</button>
           <button className={styles.sell}>Sell Stock</button>
</div>
</div>
</Box>
</>
)
}


export default performance;
