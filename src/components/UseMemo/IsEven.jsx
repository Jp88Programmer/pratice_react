import React, { useMemo, useState } from "react";

const IsEven = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const iseven = useMemo(() => {
    let i = 0;
    while (i < 1e9) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <>
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
      >
        count : {countOne}{" "}
      </button>
      <div>{iseven ? "even" : "odd"}</div>
      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
      >
        count : {countTwo}
      </button>
    </>
  );
};

export default IsEven;
