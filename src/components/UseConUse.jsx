import React from "react";
import CompC from "./CompC";

const UserContext = React.createContext();
const UseConUse = () => {
  return (
    <div>
      <UserContext.Provider value={"Jayendra Parmar"}>
        <CompC />
      </UserContext.Provider>
    </div>
  );
};

export default UseConUse;
