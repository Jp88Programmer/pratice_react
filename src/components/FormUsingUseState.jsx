import React, { useState } from "react";

function FormUsingUseState() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [arr, setArr] = useState([]);
  console.log(
    "🚀 ~ file: FormUsingUseState.jsx:6 ~ FormUsingUseState ~ arr",
    arr
  );
  return (
    <>
      <form>
        <div className="box">
          First Name :{" "}
          <input
            type="text"
            onChange={(e) =>
              setName((prev) => {
                return { ...prev, firstName: e.target.value };
              })
            }
          />
        </div>
        <div className="box">
          Second Name :{" "}
          <input
            type="text"
            onChange={(e) =>
              setName((prev) => {
                return { ...prev, lastName: e.target.value };
              })
            }
          />
        </div>
        <div className="box">
          Email :{" "}
          <input
            type="email"
            onChange={(e) =>
              setName((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
        </div>
        <div className="box">
          Password :{" "}
          <input
            type="password"
            onChange={(e) =>
              setName((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setArr(Object.entries(name))}
        >
          submit
        </button>

        <ul>
          {arr &&
            arr.map((e) => {
              console.log(e, e[0], e[1]);
              return (
                <li className="box" key={e.id}>
                  {e[1]}
                </li>
              );
            })}
        </ul>
      </form>
    </>
  );
}

export default FormUsingUseState;
