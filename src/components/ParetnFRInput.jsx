import React, { Component } from "react";
import FRInput from "./FRInput";

export default class ParetnFRInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Focus</button>
        {/* <div>ParetnFRInput</div> */}
        <FRInput ref={this.inputRef} />
      </>
    );
  }
}
