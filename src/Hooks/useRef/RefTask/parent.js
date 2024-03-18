import React, { useState } from "react";
import Child1 from "./child";

function Parent() {
  const [input, setInput] = useState();

  function fun(temp)
  {
    setInput(temp);
  } 

  return (
    <>
      <h1>{input}</h1>
      <Child1 fun={fun} />
    </>
  );
}
export default Parent;
