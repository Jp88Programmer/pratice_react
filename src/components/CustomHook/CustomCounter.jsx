import React from "react";
import useCounter from "../../hooks/useCounter";

const CustomCounter = () => {
  const [count, increment, decrement, reset] = useCounter(10, 10000);
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default CustomCounter;
