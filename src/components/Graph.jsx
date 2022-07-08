import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js'
import axios from "axios"
ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)

const Graph = () => {
 const [addSub,setaddSub]= useState([]);
 const [add,setadd]= useState([])
 const[select,setselect]= useState(1)
 let lebel= [];
 for(let i=0;i<add.length;i++){
    lebel.push("Week"+Number(i+1))
 }

 
 useEffect(()=>{
   getD()
 },[])
 useEffect(()=>{
    if(select==3){
        let arr=[]
        axios.get("https://api.github.com/repos/hlv-kakashi/KFC-clone-full-stack/stats/commit_activity")
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
   let res=await axios.get("https://api.github.com/repos/AmanJaiswal0612/React_Travelocity_Clone/stats/code_frequency")
   let {data}= res
    setaddSub(data)
  }

    const data={
        labels:lebel,
        datasets:[
            {
                label: "First Dataset",
                data:add,
                backgroundColor:"Yellow",
                borderColor:"red"
            }
        ]
    }
  return (
    <div>
        <Line data={data}></Line>
        <select onChange={(e)=>setselect(e.target.value)}>
            <option value="1">ADD</option>
            <option value="2">SUB</option>
            <option value="3">Commits</option>
        </select>
    </div>
  )
}

export default Graph