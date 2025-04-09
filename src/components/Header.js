import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <div>This is the header</div>
        {this.fun()}
      </>
    );
  }

  fun() {
    return <h2>hello this is the function to use with class</h2>;
  }
}
