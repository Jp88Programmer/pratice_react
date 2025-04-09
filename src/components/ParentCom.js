import React, { Component } from "react";
import ChildCom from "./ChildCom";
import ChildFun from "./ChildFun";

export default class ParentCom extends Component {
  constructor() {
    super();

    this.state = {
      msg: "hello i am parent",
    };

    this.parentMethod = this.parentMethod.bind(this);
  }

  parentMethod(child) {
    // return `${this.state.msg} and its child is ${child}`;
    // console.log(child)
    console.log(child);
    this.setState({
      msg: child,
    });

    // alert(`${this.state.msg} and its child is `)
  }

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        {/* <ChildCom parentpro={{parentMethod:this.parentMethod}} /> */}
        <ChildCom parentpro={this.parentMethod} />
        {/* <ChildCom /> */}
      </>
    );
  }
}
