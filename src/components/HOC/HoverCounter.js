import React from "react";
import CommonIncComp from "./CommonIncComp";

let incrementNumber = 1;
const HoverCounter = ({ counter, incrementCounter, incNum }) => {
  incrementNumber = incNum;
  return (
    <div>
      <button onMouseEnter={incrementCounter}>
        Cursor in button {counter} times
      </button>
    </div>
  );
};

export default CommonIncComp(HoverCounter, 3);
