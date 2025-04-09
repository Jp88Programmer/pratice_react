import React from "react";
// import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
  return (
    <>
      {/* <div>FRInput</div> */}
      <input ref={ref}></input>
    </>
  );
});

export default FRInput;
