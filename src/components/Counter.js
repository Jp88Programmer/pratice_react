import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      change: "",
      x: 0,
      y: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prv) => {
      return { count: prv.count + 1 };
    });
    // this.setState({
    //     count: this.state.count + 1
    // }, () => {
    //     console.log(this.state.count)
    // })

    // for (let i = 0; i < 5; i++) {

    //     this.setState((prev) => {
    //         return {
    //             count: prev.count + 1
    //         }f
    //     })
    // }
  }

  decrement(e) {
    this.setState((prev) => {
      return prev.count != 0 ? { count: prev.count - 1 } : { count: 0 };
    });
    // for (let i = 0; i < 5; i++) {
    //     this.setState((prev) => {
    //         if (prev.count > 5) {

    //             return {
    //                 count: prev.count - 1
    //             }
    //         } else {

    //             return {
    //                 count: 0
    //             }
    //         }
    //     })
    // }
  }

  logmousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  // when once times that its run at once at start
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.logmousePosition);
  }

  // after that if state or props or components change that than called this method
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.count, this.state.change);
    if (prevState.count !== this.state.count) {
      console.log(this.state.count, this.state.change);
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <>
        <h2>
          X : {this.state.x} And Y : {this.state.y}
        </h2>
        <input
          value={this.state.change}
          onChange={(e) => this.setState({ change: e.target.value })}
        />
        <h1 style={{ fontSize: "60px" }}>{this.state.count}</h1>
        {/* Event Handler */}
        <button className="btn" onClick={this.increment}>
          Increment
        </button>
        <button className="btn" onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
  }
}
