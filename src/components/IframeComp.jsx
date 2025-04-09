import React from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import IframeResizer from "iframe-resizer-react";

function IframeComp({ children }) {
  const [ref, setRef] = useState();
  const container = ref?.contentDocument?.body;

  return (
    // <IframeResizer
    //   log
    //   src="http://localhost:3000/register-subdomain-widget/fwefdwe.dcdcecve?theme=dark"
    //   style={{ width: "500px", maxWidth: "650px" ,"height" : "700px","overflow":'hidden'}}
    // />
    <IFrame />
  );
}

function IFrame({ children }) {
  const [ref, setRef] = useState();
  const container = ref?.contentDocument?.body;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <iframe
        title="iframe"
        src="http://localhost:3000/resolution-widget"
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
}

function MyComponent() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
    </>
  );
}

export default IframeComp;
