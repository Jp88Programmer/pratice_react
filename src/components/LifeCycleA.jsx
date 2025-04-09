import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };
    console.log("constructor called with LifecycleA");
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps called with LifecycleA");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount with LifecycleA");
    // console.log(this.state.msg);
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called with LifecycleA");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate called with LifecycleA");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called with LifecycleA");
    // console.log(this.state.msg);
  }

  render() {
    console.log("render() called with LifecycleA");
    return (
      <>
        <div>LifeCycleA</div>
        <LifeCycleB />
        <button onClick={() => this.setState({ msg: "nobody" })}>
          Change State
        </button>
      </>
    );
  }
}

export default LifeCycleA;
