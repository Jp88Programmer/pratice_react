import React, { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const ClickTitleChange = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState("");

  useDocumentTitle(count);

  return (
    <>
      <input value={change} onChange={(e) => setChange(e.target.value)} />
      <div>{count}</div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </>
  );
};
