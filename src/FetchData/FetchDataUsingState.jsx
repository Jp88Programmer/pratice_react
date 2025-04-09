import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchDataUsingState = () => {

    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState();
    const [error,setError] = useState('');

    useEffect(()=>{

        // when data fetch (GET  request) using axios 
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            setLoading(false);
            setPost(res.data)
            setError('');
        })
        .catch((err)=>{
            setLoading(false)
            setPost({})
            setError("Something went wrong")
        })
    },[])
  return (
    <>
      <div>FetchDataUsingState</div>
      <div>{loading ? "Loading" : post.title}</div>
    </>
  );
};

export default FetchDataUsingState;
