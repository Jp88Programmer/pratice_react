import React, { useEffect, useState } from "react";

const CounterUseEffect = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <div>CounterUseEffect</div>;
    </>
  );
};

export default CounterUseEffect;
