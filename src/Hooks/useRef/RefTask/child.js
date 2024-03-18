import React, { useCallback, useState } from "react";

function Child1({fun}) {

    const[temp,setTemp]=useState();
    return (
    <>
      <input value={temp} onChange={(e)=>setTemp(e.target.value)}/>
      <button onClick={()=>fun(temp)}>click here</button>
    </>
  );
}

export default Child1;
