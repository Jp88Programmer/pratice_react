import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const UseEventHandling = () => {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Current count", countRef.current); // always latest value
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEventHandling;
