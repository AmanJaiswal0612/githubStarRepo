
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js'
import axios from "axios"
ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)

const SecondGraph = ({repo,flag}) => {
    let [wholeadd,setwholeadd]=useState([]);
    let [wholesub,setwholesub]=useState([]);
    let [wholecom,setwholecomm]=useState([]);
    const [members,setmembers]= useState([])
    let [select,setselect]= useState("")
useEffect(()=>{
    if(flag){
    axios.get(`https://api.github.com/repos/${repo}/stats/contributors`)
    .then(({data})=>{
     let temp1=[];
     let temp2=[];
     let temp3=[];
      for(let i=0;i<data.length;i++){ 
        members.push(data[i].author.login)  
        console.log(data[i].author.login)
        let add=[];let sub=[];let comm=[];
        for(let j=0;j<data[i].weeks.length;j++){
            add.push(data[i].weeks[j].a);
            sub.push(data[i].weeks[j].d);
            comm.push(data[i].weeks[j].c);
        }
        temp1.push(add);
        temp2.push(sub);
        temp3.push(comm);
      }
      setwholeadd(temp1)
      setwholesub(temp2)
      setwholecomm(temp3)
    })
  }
},[flag])






let    datasets=[]
for(let i=0;i<wholeadd.length;i++){
    let randomborderColor= Math.floor(Math.random()*16777215).toString(16)
    let randombgColor= Math.floor(Math.random()*16777215).toString(16)
    let data;
    if(select=="2"){
      data=wholesub[i]
    }else if(select=="3"){
        data=wholecom[i]
    }else{
        data=wholeadd[i]
    }
    let dset= {
        label: members[i],
        data,
        backgroundColor:`#${randombgColor}`,
        borderColor:`#${randomborderColor}`
    }
   datasets.push(dset)
}


const data={
    labels:["Week1","week2","week3","week4"],
    datasets:datasets
}

  return (
    <div style={{padding:"50px", width:"70%"}} >
        <select name="graph" onChange={(e)=>setselect(e.target.value)} >
            <option value="1">Addition</option>
            <option value="2">Delection</option>
            <option value="3">Commits</option>
        </select>
        <Line data={data}></Line>
    </div>
  )
}

export default SecondGraph