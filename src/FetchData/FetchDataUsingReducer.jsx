import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initalState = {
    loading:true,
    post : [],
    error: ""
}

// reducer function 
const reducer = (state,action) => {

    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading : false,
                post : action.payload,  //after fetch the data store the post state 
                error : ''
            }
        
        case "FETCH_ERROR": 
            return {
                loading : false,
                post : [],
                error : "Something was wrong"
            }
        
        default : 
            return initalState
        
    }
}
const FetchDataUsingReducer = () => {
    const [state,dispatch] = useReducer(reducer,initalState);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            dispatch({type: "FETCH_SUCCESS",payload : res.data})    //when data successfully fetch the data
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type: "FETCH_ERROR"})
        })
    },[])
  return (
    <>
      <div>FetchDataUsingReducer</div>
      <ul>{state.loading ? "Loding"  : state.post.map((e)=>{
        return <li>{e.title}</li>
      })}</ul>
      <div>{state.error ? state.error : null}</div>
    </>
  );
};

export default FetchDataUsingReducer;
