import React, { useEffect, useState } from "react";

const Comp12 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(inter);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>clicked</button>
    </div>
  );
};

export default Comp12;
