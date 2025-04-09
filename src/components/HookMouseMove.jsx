import React, { useEffect, useState } from "react";

export const HookMouseMove = () => {
  // const [style,setStyle] = useState({backgroundColor:"rgb(0,0,0)"});
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeMousePos = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
    // setStyle({backgroundColor:`rgb(${e.clientX % 256},${e.clientY % 256},${e.clientX % 256})`})
  };

  //   using work with componentdidmount,componentdidupdate,componentunmount
  useEffect(() => {
    console.log("how times called");
    window.addEventListener("mousemove", changeMousePos);

    return () => {
      console.log("remove mouse move");
      window.removeEventListener("mousemove", changeMousePos);
    };
  }, []);
  return (
    <>
      <h2 className="head2">
        X : {x} And Y : {y}
      </h2>
    </>
  );
};
