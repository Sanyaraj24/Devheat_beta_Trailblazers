//import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from './portfolio.module.css'

const portfolio = () => {
  return (
    <>
    <div className={styles.body}>
      <div classNameName={styles.container}>
        <div className={styles.heading}> Hello User!</div>
       
        <br></br>
        <div className={styles.count}>
            <p>Total Stocks Bought: <span className={styles.totalBought}>0</span></p>
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
    </div>
    </div>
    </>
  )
}

export default portfolio
