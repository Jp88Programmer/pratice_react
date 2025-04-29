import React from "react";
import useInput from "../../hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFName] = useInput("");
  const [lastName, bindLastName, resetLName] = useInput("");
  let handleSubmit = (event) => {
    alert(`${firstName} and ${lastName}`);
    resetFName();
    resetLName();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        First Name : <input type="text" {...bindFirstName}></input>
        Last Name : <input type="text" {...bindLastName}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
