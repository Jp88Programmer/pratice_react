import React, { Component } from "react";
import ChildMemo from "./ChildMemo";

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jayendra",
    };
  }

  componentDidMount() {
    // console.log(this.state.name);
    setInterval(() => {
      // console.log(this.state.name);
      this.setState({
        name: "ARM",
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <div>ParentComponent</div>
        <ChildMemo name={this.state.name} />
      </>
    );
  }
}
