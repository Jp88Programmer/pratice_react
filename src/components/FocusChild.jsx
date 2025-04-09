import React, { Component } from "react";

class FocusChild extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
  }

  focusMethod() {
    this.inputref.current.focus();
  }
  blurMethod() {
    this.inputref.current.blur();
  }

  render() {
    return (
      <>
        {/* to focus in input using point to the referance */}
        <input ref={this.inputref} />
        <div>FocusChild</div>
      </>
    );
  }
}

export default FocusChild;
