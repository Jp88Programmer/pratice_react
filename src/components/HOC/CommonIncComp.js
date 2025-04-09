import React, { useState } from "react";

const commonIncComp = (Comp, incrementNumber) => {
  //using with hook
  return function CommonIncComp(props) {
    const [counter, setCounter] = useState(0);

    function incrementByOne() {
      setCounter(counter + incrementNumber);
    }
    return (
      <Comp counter={counter} incrementCounter={incrementByOne} {...props} incrementNumber={incrementNumber}/>
    );
  };

  //Using with class component
  /*
  class NewCommon extends React.Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
      };
    }

    incrementByOne = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    };
    render() {
      return (
        <Comp
          counter={this.state.counter}
          incrementCounter={this.incrementByOne}
        />
      );
    }
  }
  return NewCommon;
  */
};

export default commonIncComp;
