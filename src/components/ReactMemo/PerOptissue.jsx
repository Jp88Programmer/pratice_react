import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Heading from "./Heading";

const PerOptissue = () => {
  const [age, setAge] = useState(19);
  const [salary, setSalary] = useState(30000);
   
  let incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);

  let incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  return (
    <>
      <div>PerOptissue</div>
      <Heading />
      <Count text="Age" count={age} />
      <Button handleclick={incrementAge}>Increment Age </Button>
      <Count text="Salary" count={salary} />
      <Button handleclick={incrementSalary}>Increment Salary </Button>
    </>
  );
};

export default PerOptissue;
