import {useState} from "react";

const useCounter = (initalCountValue = 0,changeValue = 1) => {
  const [count, setCount] = useState(initalCountValue);

  const increment = () => {
    setCount((p) => p + changeValue);
  };
  const decrement = () => {
    setCount((prev) => {
      if (prev != 0) return prev - changeValue;
      return initalCountValue;
    });
  };
  const reset = () => {
    setCount(initalCountValue);
  };

  return [count,increment,decrement,reset]
};

export default useCounter;
