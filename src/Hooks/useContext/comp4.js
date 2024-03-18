import React, { useContext } from "react";
import { UserContext } from "./useContext";

function UseComp4() {
  const value = useContext(UserContext);
  console.log("usecomp4");

  return (
    <>
      <h1>component 4 </h1>
      <h1>{value}</h1>
    </>
  );
}

export default UseComp4;
