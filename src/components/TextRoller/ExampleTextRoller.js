import React from "react";
import TextLoop from "react-text-loop";

const ExampleTextRoller = () => {
  return (
    <div>
      <TextLoop interval={100}>
        <span>Trade faster</span>
        <span>Increase sales</span>
        <span>Stock winners</span>
      </TextLoop>
      <span> jayendra </span>
    </div>
  );
};

export default ExampleTextRoller;
