import React from "react";

// here make the pure component using React memo property instead of making pure component class
// extend the PureComponent
function ChildMemo(name) {
  console.log(name);
  return (
    <>
      <div>ChildMemo</div>
    </>
  );
}

export default React.memo(ChildMemo);
