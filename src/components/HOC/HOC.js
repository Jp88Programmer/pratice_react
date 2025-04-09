import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HOC = () => {
  return (
    <div>
      <ClickCounter incNum={4} />
      <HoverCounter incNum={3} />
    </div>
  );
};

export default HOC;
