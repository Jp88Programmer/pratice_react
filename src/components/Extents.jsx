import React, { Component } from "react";

export default class Extents extends Component {
  render() {
    return (
      <>
        <div>Name : {this.props.name}</div>
        <div>Score : {this.props.score}</div>
        <div>Profile : {this.props.profile}</div>
        <div>print the chlidren contain</div>
        {this.props.children}
      </>
    );
  }
}
