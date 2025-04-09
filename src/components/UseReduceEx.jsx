import React, { useReducer } from "react";

const initalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

const UseReduceEx = () => {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button className="btn" onClick={() => dispatch("reset")}>
        Rest
      </button>
      <div>UseReduceEx</div>
    </>
  );
};

export default UseReduceEx;
