import React, { useReducer } from "react";

// inital state 
const initalState = {
  fc: 0,
  sc: 10,
};
// reduce function 
// which contents the state and action
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        fc: state.fc + action.value,
      };
    case "decrement":
      return {
        ...state,
        fc: state.fc - action.value,
      };
    case "increment10":
      return {
        ...state,
        sc: state.sc + action.value,
      };
    case "decrement10":
      return {
        ...state,
        sc: state.sc - action.value,
      };
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const UseReduceEx2 = () => {
  // when use with one useReducer function
  const [count, dispatch] = useReducer(reducer, initalState);

  //   second independent useReducer and its use to above reducer and initalState
  const [countSecond, dispatchTwo] = useReducer(reducer, initalState);
  return (
    <>
      <h1>First Counter : {count.fc}</h1>
      <h1>Second Counter{count.sc}</h1>
      <h1>Independent Counter : {countSecond.fc}</h1>

      <button
        className="btn btnClass"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        className="btn btnClass"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <div>
        <button
          className="btn btnClass"
          onClick={() => dispatch({ type: "increment10", value: 10 })}
        >
          Increment by 10
        </button>
        <button
          className="btn btnClass"
          onClick={() => dispatch({ type: "decrement10", value: 10 })}
        >
          Decrement by 10
        </button>
      </div>
      <div>
        <button
          className="btn btnClass"
          onClick={() => dispatchTwo({ type: "increment", value: 1 })}
        >
          Increment
        </button>
        <button
          className="btn btnClass"
          onClick={() => dispatchTwo({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
      </div>

      <button
        className="btn btnClass"
        onClick={() => dispatchTwo({ type: "reset" })}
      >
        Rest
      </button>
      <div>UseReduceEx2</div>
    </>
  );
};

export default UseReduceEx2;
