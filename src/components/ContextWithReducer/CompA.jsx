import React, { useContext } from "react";
import { counterContext } from "./Pract";

const CompA = () => {
  const counter = useContext(counterContext);
  return (
    <>
      <div>CompA</div>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "incrementa" })}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counter.counterDispatch({ type: "decrementa" })}
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

export default CompA;
