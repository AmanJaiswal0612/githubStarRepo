
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js'
import axios from "axios"
ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)


const FirstGraph = ({repo,flag}) => {
    
  const [addSub,setaddSub]= useState([]);
  const [add,setadd]= useState([])
  const[select,setselect]= useState(1)
  let lebel= [];
  for(let i=0;i<add.length;i++){
     lebel.push("Week"+Number(i+1))
  }

  useEffect(()=>{
    if(flag)
    getD()
    
  },[flag])
  useEffect(()=>{
     if(select==3&&flag==true){
         let arr=[]
         axios.get(`https://api.github.com/repos/${repo}/stats/commit_activity`)
         .then(({data})=>{
             for(let i=0;i<data.length;i++){
                 arr.push(data[i].total)
             }
             setadd(arr)
 
         })
         
     }else{
         let temp=[]
         for(let i=0;i<addSub.length;i++){
             let val= addSub[i][select];
             temp.push(val)
          }
          setadd(temp)
     }
    
  },[addSub,select])
 
   const getD= async ()=>{
    let res=await axios.get(`https://api.github.com/repos/${repo}/stats/code_frequency`)
    let {data}= res
     setaddSub(data)
   }
 
      

     const data={
         labels:lebel,
         datasets:[
             {
                 label: "Graph1",
                 data:add,
                 backgroundColor:"Yellow",
                 borderColor:"red",
                
             }
         ]
     }


// useEffect(()=>{
//  axios.get(`https://api.github.com/repos/${repo}/stats/code_frequency`)
//  .then(({data})=>{
//     console.log(data)
//  })
// },[])







  return (
    <div style={{padding:"50px", width:"70%"}} >
     <select onChange={(e)=>setselect(e.target.value)}>
            <option value="1">Addition</option>
            <option value="2">Deletion</option>
            <option value="3">Commits</option>
        </select>
   <Line data={data}></Line>
      


    </div>
  )
}

export default FirstGraph