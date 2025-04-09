import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      company: "Knackroot",
      emp: "jayendra",
    };
  }

  changeEmp() {
    this.setState({
      company: "Knackroot",
      emp: "Avad",
    });
  }

  changeCom() {
    this.setState({
      company: "realme",
      emp: "jayendra",
    });
    console.log(
      "🚀 ~ file: ClassComponent.jsx:30 ~ ClassComponent ~ render ~ this.state.company:",
      this.state.company,
      this.state.emp
    );
  }

  render() {
    return (
      <>
        <div>Company : {this.state.company}</div>
        <div>Employee : {this.state.emp}</div>
        <div>
          <button onClick={this.changeEmp}>change employee</button>
          <button onClick={() => this.changeCom}>change company</button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
