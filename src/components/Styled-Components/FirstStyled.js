import React from "react";
import styled from "styled-components";
import StyleButton, { FancyButton } from "./styledComponets/ButtonStyled";

// const StyleButton = styled.button`
//   background-color: #4caf50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `;

// background-color: #4caf50;
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     text-align: center;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
const FirstStyled = () => {
  return (
    <>
      <div>FirstStyled</div>
      {/* <StyleButton>Hello Me As Button Thoko!!!!</StyleButton> */}
      <StyleButton>Hello Me As Button Thoko!!!!</StyleButton>
      <StyleButton variant="outline">Hello Me As Button Thoko!!!!</StyleButton>
      <FancyButton as="a">This is style button</FancyButton>
    </>
  );
};

export default FirstStyled;
