import React, { useEffect, useState } from "react";

export const CounterUseState = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState("");

  useEffect(() => {
    console.log("this is update");
    document.title = `you clicked ${count}`;
  }, [count]);
  return (
    <>
      <input value={change} onChange={(e) => setChange(e.target.value)} />
      <div>{count}</div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </>
  );
};
