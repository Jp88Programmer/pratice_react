import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    console.log("constructor called with LifeCycleB");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called with LifeCycleB");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called with LifeCycleB");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate called with LifeCycleB");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called with LifeCycleB");
    // console.log(this.state.msg);
  }
  componentDidMount() {
    console.log("componentDidMount with LifeCycleB");
  }
  // componentDidUpdate() {
  render() {
    console.log("render() called with LifeCycleB");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
