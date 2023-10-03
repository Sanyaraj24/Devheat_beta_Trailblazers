import React from 'react'
import Plot from 'react-plotly.js';


class Stock extends React.Component{
constructor(props){
    super(props);
    this.state={
        stockCharXValues:[],
    stockChartYValues:[]
    }
}
componentDidMount(){
    this.fetchStock();
}
fetchStock(){
    const pointerToThis=this;
    console.log(pointerToThis);
    const API_KEY='VAV03Y6K3M32P08N';
    let StockSymbol='AMZN';
    let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    
    fetch(API_Call)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        for(var key in data['Time Series (Daily)']){
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)']
            [key]['1.open']);
        }
        pointerToThis.setState({
            stockChartXValues:stockChartXValuesFunction,
            stockChartYValues:stockChartYValuesFunction
        });
    }
    )
}
    render(){
  return (
    <>
    <div>
        <h1>stock market</h1>
        <Plot
        data={[
            {
                x:this.state.stockChartXValues,
                y:this.state.stockChartYValues,
                type:'scatter',
                mode:'lines+markers',
                marker:{color:'red'},
            }
        ]}
        layout={{width:720,height:440,title:'a plot'}}/>
    </div>
    </>
  )
}
}

export default Stock
