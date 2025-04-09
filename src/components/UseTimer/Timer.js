import React from "react";
import useCounter from "./useCounter";

const Timer = () => {
  const { count } = useCounter();
  return (
    <div
      style={{
        fontSize: "30px",
        fontWeight: "700",
      }}
    >
      {count}
    </div>
  );
};

export default Timer;
