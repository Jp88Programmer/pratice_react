import React from "react";
import { HookMouseMove } from "./HookMouseMove";
import { useState } from "react";

export const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {/* <div>MouseContainer</div> */}
      {display && <HookMouseMove />}
    </>
  );
};
