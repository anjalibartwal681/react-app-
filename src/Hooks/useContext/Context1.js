import React, { useContext } from "react";
import { UserContext } from "./useContext";

function UseComp2() {
  const value = useContext(UserContext);
  return (
    <>
      <h1> usecomp2 </h1>
      <p>{value}</p>
    </>
  );
}

export default UseComp2;
