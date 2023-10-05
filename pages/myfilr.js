


fetch(`https://api.twelvedata.com/quote?symbol=${router.query.symbol}&apikey=82c55a8de2fa432aba310de8a7e16a97`)
 .then((res)=>res.json())
 .then((r)=>{
   setr(r)
   setLoading(false)
},[])
if(isLoading)return<p>Loading..</p>
if(!data)return <p>Found nothing</p>
console.log(r)