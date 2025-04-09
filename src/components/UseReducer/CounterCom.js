import React, { useReducer } from "react";

const initalState = 0;
function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state == 0) return state;
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
function CounterCom() {
  const [counter, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <div>Count - {counter}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterCom;
