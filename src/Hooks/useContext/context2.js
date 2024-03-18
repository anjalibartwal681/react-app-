import React, { useContext } from "react";
import { UserContext } from "./useContext";
import UseComp4 from "./comp4";
function UseComp3() {
  console.log("usecomp3");
  const value = useContext(UserContext);
  return (
    <div>
      <h1>component3</h1>
      <p> {value}</p>
      <UseComp4 />
    </div>
  );
}
export default UseComp3;
