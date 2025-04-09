import React, { Component } from "react";
import FocusChild from "./FocusChild";

// here make the button when clicked on a child input field focus on
// here make the ref its contain the child component reference
// when clicked the button its focus and called its component (this method to focus that means its called)
// and input box should be focsuable after click the button
class ParentFocus extends Component {
  constructor(props) {
    super(props);
    this.focusInput = React.createRef();
  }
  clickHandler = () => {
    this.focusInput.current.focusMethod();
  };
  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Focus On</button>
        {/* <div>ParentFocus</div> */}
        <FocusChild ref={this.focusInput} />
      </>
    );
  }
}

export default ParentFocus;
