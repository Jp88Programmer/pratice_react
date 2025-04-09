import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

// https://jsonplaceholder.typicode.com/posts
const FetchingData = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      //   console.log(res);
      setData(res.data);
    });
  }, []);

  //   console.log(data);
  return (
    <>
      <div className="list">
        <ul className="div1">
          {data.map((e, id) => {
            return <Card country={e} key={id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default FetchingData;
