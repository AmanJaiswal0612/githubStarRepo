
import axios from "axios"
export const ADDREPO= "ADDREPO"
export const ADDTIME= "ADDTIME"


const addRepo= (payload)=>{
   return {
    type:ADDREPO,
    payload
   }
}

const addTime=(payload)=>{
    return{
        type:ADDTIME,
        payload
    }
}

export const getRepoData= (query)=> (dispatch)=>{
    // console.log(query)
    var sendDate= (new Date()).getTime();
    
    axios.get(`https://api.github.com/search/repositories?q=created:>2022-07-05&sort=stars&order=desc&${query}`)
    .then(({data})=>{dispatch(addRepo(data.items))
    }).then(()=>{
        var receivedDate=(new Date()).getTime();
        var responseTime= Number(receivedDate-sendDate)/1000;
        dispatch(addTime(responseTime))
    })
    
}