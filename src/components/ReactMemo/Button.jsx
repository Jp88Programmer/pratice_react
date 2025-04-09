import React from "react";

const Button = ({ handleclick, children }) => {
  console.log("Rendering button - ", children);
  return (
    <>
      <button onClick={handleclick}>{children}</button>
    </>
  );
};

export default React.memo(Button);
