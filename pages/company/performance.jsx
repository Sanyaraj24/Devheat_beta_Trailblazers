import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
  //import { Button } from '@mui/material'
  import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text} from '@chakra-ui/react'
  //import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
  //import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
  import styles from './performance.module.css'

  
import React from 'react'

const performance = () => {
 
  return (
  <>
  <div className="main">
<div className={styles.head}>
        <h1>State Bank of India</h1>
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
 

<div className={styles.todayprice}>
   <div className={styles.per}>Performance</div>
    <br></br>
   <div className={styles.box1}>
        <Stat>
          <StatLabel> Today's Low</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
   </div>
   <div className={styles.box2}>
        <Stat>
          <StatLabel>Today's Low</StatLabel>
          <StatNumber>345,670</StatNumber>
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
          <StatNumber>85870</StatNumber>
        </Stat>
  </div>
  <div className={styles.box4}>
  <Stat>
          <StatLabel>52 Week High</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
  </div>
  <hr width="100%" 
        size="20" 
        align="center"></hr>
  <br></br>
<div className={styles.peri}>
  <div className={styles.b1}><Stat>
          <StatLabel>Open</StatLabel>
          <StatNumber>345.0</StatNumber>
        </Stat>

   </div>
   <div className={styles.b2}><Stat>
          <StatLabel>Prev. Close</StatLabel>
          <StatNumber>783.90</StatNumber>
        </Stat></div>
   <div className={styles.b3}><Stat>
          <StatLabel>Volume</StatLabel>
          <StatNumber>900670</StatNumber>
        </Stat>

    </div>
</div>
</div>
<br></br>
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

</div>
<br>
</br>
<br></br>
{/*sell and buy button*/}
<button className={styles.btn1} href="#contained-buttons"> Sell</button>
<button className={styles.btn2} href="#contained-buttons"> Buy</button></div>
<br></br>
<br></br>
<br></br>
</>
  )
}

export default performance
