import React, { useEffect, useState } from "react";
import SimpleAccordion from "../components/Accordian";
import { useSelector, useDispatch } from "react-redux";
import { getRepoData } from "../redux/action";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularColor from "../components/Loader";


const MainPage= () => {
  const repo = useSelector((state) => state.repo);
  // console.log(repo)
  let page_limit = 10;
  const time= useSelector((state)=>state.time)
  let dispatch = useDispatch();
  useEffect(() => {
   getRepoList()
  },[]);

  const getRepoList=()=>{
    let pageNo = Math.ceil(repo.length / page_limit) + 1;
    const query = "&page=" + pageNo + "&per_page=" + page_limit;
    dispatch(getRepoData(query))
  }

const fetchMoreData = ()=>{
  getRepoList();
}

  return (
    <div style={{width:"70%",margin:"auto"}} >
      <h1 style={{textAlign:"center"}} >Most Starred Repo</h1>
      <h3>Result comes in {time} seconds</h3>
      <InfiniteScroll
        dataLength={repo.length}
        next={fetchMoreData}
        // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        // inverse={true} 
        hasMore={true}
        loader={<h4><CircularColor/></h4>}
        // scrollableTarget="scrollableDiv"
      >
         {repo.map((el, index) => {
        return <SimpleAccordion key={index} el={el} />;
      })}
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
