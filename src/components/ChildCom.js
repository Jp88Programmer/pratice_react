import React, { Component } from "react";

export default class ChildCom extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };

    // this.clickMethod = this.clickMethod(this)
  }

  // containParent(props){
  //     this.setState({
  //         vals : this.props.parentpro
  //     })
  // }

  change(e) {
    console.log(e);
    this.setState({
      message: e.target.value,
    });
  }
  // ()=> props.parentpro("hello")
  // clickMethod(){
  //     // console.log(props.parentpro("hello"))
  //     console.log(this.props.parentpro(this.state.message))
  // }
  render() {
    // console.log(props.parentpro())
    return (
      <>
        {/* <div>{this.porps.parentpro}</div> */}
        {/* <button onClick={this.clickMethod}>Click</button> */}
        <input
          value={this.state.message}
          name="message"
          onChange={(e) => this.change(e)}
        ></input>
        {/* <button onClick={()=> this.props.parentpro(this.state.message)}>Click</button> */}
        <button onClick={() => this.props.parentpro(this.state.message)}>
          Click
        </button>
        {/* <button onClick={props.parentpro}>Click</button> */}
      </>
    );
  }
}
