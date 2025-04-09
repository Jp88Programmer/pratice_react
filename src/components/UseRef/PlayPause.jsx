import React, { useEffect, useRef, useState } from "react";

const PlayPause = () => {
  const [count, setCount] = useState(0);
  const [istop, setisstop] = useState(false);
  const stopref = useRef(null);
  const tick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    stopref.current = setInterval(tick, 1000);

    return () => clearInterval(stopref.current);
  }, []);

  let stopandstart = () => {
    if (istop) {
      setisstop(!istop);
      stopref.current = setInterval(tick, 1000);
    } else {
      setisstop(!istop);
      clearInterval(stopref.current);
    }
  };
  return (
    <>
      <div>PlayPause</div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          stopandstart();
        }}
      >
        {istop ? "Play" : "Pause"}
      </button>
    </>
  );
};

export default PlayPause;
