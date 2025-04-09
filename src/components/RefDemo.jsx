import React, { Component } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    this.inputRef = React.createRef();

    // second method to handle input changes usib
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  // when state / component would change
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  // componentWillUnmount() {
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <>
        {/* <input type="text" ref={this.inputRef}></input> */}
        <input type="text" ref={this.setcbRef}></input>
        {/* <div>RefDemo</div> */}
        <button onClick={this.clickHandler}>click</button>
      </>
    );
  }
}
