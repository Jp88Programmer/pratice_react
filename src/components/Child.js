import React, { Component } from "react";

export default class Child extends Component {
  render() {
    // props Destructuring
    const { name, age, des } = this.props;
    return (
      <>
        <div>this is the child components using with class components</div>
        <div>show your identity</div> <div>{name}</div> <div>{age}</div>{" "}
        <div>{des}</div> <div>{age}</div> <div>hello</div>
      </>
    );
  }
}
