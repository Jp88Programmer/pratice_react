import React, { Component } from "react";

export default class Mystate extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Please Click The Button",
    };
  }

  changeAfterClick(e) {
    console.log(e);
    this.setState({
      msg: "Thanks For Click The Button",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeAfterClick()}>Click Me</button>
      </>
    );
  }
}
