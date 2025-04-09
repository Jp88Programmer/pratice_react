import React from "react";

const DomainItem = ({ domain }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        gap: "20px",
        borderRadius: "10px",
        background: "#464ec4",
        color: "white",
      }}
    >
      <div>{domain?.title}</div>
    </div>
  );
};

export default DomainItem;
