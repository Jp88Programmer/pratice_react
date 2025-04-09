import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <>
      <div>FocusInput</div>
      <input ref={inputref} />
    </>
  );
};

export default FocusInput;
