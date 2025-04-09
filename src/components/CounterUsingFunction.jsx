import React, { useState } from "react";

function CounterUsingFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((p) => p + 1);
  };
  const decrement = () => {
    setCount((prev) => {
      if (prev != 0) return prev - 1;
      return 0;
    });
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button
        className="btn"
        onClick={() =>
          setCount((prev) => {
            if (prev != 0) return prev - 1;
            return 0;
          })
        }
      >
        Decrement
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      {/* <div>CounterUsingFunction</div> */}
    </>
  );
}

export default CounterUsingFunction;
