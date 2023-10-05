//import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from './portfolio.module.css'
import Box from '@mui/material/Box';


const portfolio = () => {
  return (
    <>
     <Box
      style={{
        backgroundColor:"black",
    marginLeft:"70px",
    width:"1360px",
    marginTop:"300px",
    height:"500px",
    borderRadius:"10px",
    opacity:"0.75",
    border:"3px"
      }}>
        <div className={styles.heading}>Hello User!</div>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.count}>
            <p>Total Stocks Bought: <span className={styles.totalBought} id="count">0</span></p>
            <p>Total Stocks Sold: <span className={styles.totalSold}>0</span></p>
        </div>
        <br></br>

        <h2>Stock Purchase History</h2>
        <br></br>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>Stock</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className={styles.purchasehistory}>
            </tbody>
        </table>
   
    </Box>
    <script src="buysellcount.js"></script>
    </>
  
  )
}

export default portfolio
