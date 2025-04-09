import { useEffect, useRef, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(60);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      // Update the count every 1000ms (1 second)
      if (deltaTime >= 1000) {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            cancelAnimationFrame(requestRef.current);
            return 0;
          }
          return prevCount - 1;
        });
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return { count };
};

export default useCounter;
