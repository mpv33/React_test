import React,{useEffect,useState } from 'react'
import './App.css';
import {getReq} from './services/apiCall'
import {setItem} from './utils/storage'

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
        fetchDataApi() 
  },[])

  const fetchDataApi= async()=>{
      const url="https://randomuser.me/api";
      try{
        const getData=await getReq(url)
        console.log(getData?.data?.results)
        setData(getData?.data?.results)
        setItem('result',getData?.data?.results)
      }
      catch(err){
          console.log('err::',err)
      }

      
  
  }

  return (
    <div className="App">
       <h1> East Vantage:S30 ReactJS Test 2022.Q2</h1>
       {data && data.map((item,i)=>
         <div key={i}>  
           <p>  Full name : {item.name.title}  {item.name.first}  {item.name.last} </p>
           <p>  Email : {item.email} </p>
         </div>
       )}
    </div>
  );
}

export default App;
