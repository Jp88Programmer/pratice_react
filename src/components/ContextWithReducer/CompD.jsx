import React, { useContext } from "react";
import { counterContext } from "./Pract";

const CompD = () => {
  const counter = useContext(counterContext);
  return (
    <>
      <div>CompD</div>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "incrementd" })}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "decrementd" })}
      >
        Decrement
      </button>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "reset" })}
      >
        Rest
      </button>
    </>
  );
};

export default CompD;
