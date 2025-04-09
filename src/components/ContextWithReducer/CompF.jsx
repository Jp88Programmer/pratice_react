import React, { useContext } from "react";
import { counterContext } from "./Pract";

const CompF = () => {
  const counter = useContext(counterContext);
  return (
    <>
      <div>CompF</div>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "incrementf" })}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "decrementf" })}
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

export default CompF;
