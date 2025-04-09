import React from "react";
import CommonIncComp from "./CommonIncComp";

let incrementNumber = 1;
const ClickCounter = ({ counter, incrementCounter, incrementNumber }) => {
  incrementNumber = incrementNumber;
  return (
    <div>
      <button onClick={incrementCounter}>clicked {counter} times</button>
    </div>
  );
};

export default CommonIncComp(ClickCounter, incrementNumber);
