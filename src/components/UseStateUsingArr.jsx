import React, { useState } from "react";

export const UseStateUsingArr = () => {
  const [arr, setArr] = useState([]);
  console.log(arr);
  return (
    <>
      <button
        className="btn"
        onClick={(e) =>
          setArr((prev) => {
            return [
              {
                id: prev.length + 1,
                value: Math.floor(Math.random() * 10) + 1,
              },
              ...prev,
            ];
          })
        }
      >
        Add Number
      </button>
      <ul>
        {arr.map((e) => {
          return <li key={e.id}>{e.value}</li>;
        })}
      </ul>
    </>
  );
};
