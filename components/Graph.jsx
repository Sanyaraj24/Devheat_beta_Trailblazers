import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const Graph = ({graphData}) => {
  console.log(graphData)
  return (
    <>
    {graphData.values ? <Line
       data={{
       // x-axis label values
       labels: graphData.values.map(row=>row.datetime),
       datasets: [
          {
              label: "Stock rise",
              // y-axis data plotting values
              data:graphData.values.map(row=>row.close),
              fill: false,
              borderWidth:2,
              backgroundColor: "black",
              borderColor:'red',
              responsive:true
            },
          ],
        }}
      />:<h1>Sorry! The stock data for this company is unavailable.</h1>}
    </>
  )
}

export default Graph
