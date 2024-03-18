import React, { useState } from "react";
import Child from "./child";

function DataRecieve() {
    const[num,setNum]=useState();
let handleclick = () => {
    console.log("hii");
  };

  return (
    <>
      <h1>parent component</h1>
      <Child/>
      <button onClick={handleclick}>click</button>
    </>
  );
}
export default DataRecieve;
