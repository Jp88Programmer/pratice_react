import React, { useReducer } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

const initalState = {
    fa:0,
    fd:0,
    ff:0
};
const reducer = (state,action) =>{
    switch(action.type) {
        case 'incrementa':
            return {
                ...state,
                fa:state.fa+1
            }
        case "decrementa":
            return {
                ...state,
                fa:state.fa-1
            };
        case 'incrementd':
            return {
                ...state,
                fd:state.fd+1
            }
        case "decrementd":
            return {
                ...state,
                fd:state.fd-1
            };
        case 'incrementf':
            return {
                ...state,
                ff:state.ff+1
            }
        case "decrementf":
            return {
                ...state,
                ff:state.ff-1
            };
        case "reset":
            return {
                ...state,
                fa:0,
                fd:0,
                ff:0,
            };
        default:
            return state;
    }
}

export const counterContext = React.createContext();
const Pract = () => {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <counterContext.Provider
        value={{ counter: count, counterDispatch: dispatch }}
      >
        <div>Pract</div>
        <div>For Comp A : {count.fa}</div>
        <div>For Comp D : {count.fd}</div>
        <div>For Comp F : {count.ff}</div>
        <CompA />
        <CompB />
        <CompC />
      </counterContext.Provider>
    </>
  );
};

export default Pract;
