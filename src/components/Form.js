import React, { Component } from "react";
import "../css/form.css";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      opt: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log(this.state)
    alert(
      `${this.state.userName} entered ${this.state.email} with ${this.state.opt}`
    );
    event.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            value={this.state.userName}
            name="username"
            onChange={(e) => this.setState({ userName: e.target.value })}
          ></input>
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <select
            value={this.state.opt}
            onChange={(e) => this.setState({ opt: e.target.value })}
          >
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Node">Node</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
