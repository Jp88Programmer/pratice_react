import styled from "styled-components";

const StyleButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "green"}; /* Green */
  border: 2px solid green;
  color: ${(props) => (props.variant === "outline" ? "green" : "#fff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "green"}; /* Green */
    /* border: 2px solid green; */
    color: ${(props) => (props.variant !== "outline" ? "green" : "#fff")};
  }
`;

const FancyButton = styled(StyleButton)`
  background-image: linear-gradient(to right, red 0%, green 100%);
  border: none;
`;
export default StyleButton;

export { FancyButton };
