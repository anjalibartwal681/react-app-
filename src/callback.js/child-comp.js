import React, { useState } from "react";
import { useCallback } from "react";
 export default function ChildToParent({fun}){
const[temp,setTemp]=useState("");

const handleOnClick = useCallback((temp) => {
    fun(temp);
    setTemp("");
}, []); 

const handleOnChange = useCallback((e) => {
setTemp(e.target.value);
}, []); 


return(<>
<input value={temp} onChange={handleOnChange}/>
<button onClick={()=>handleOnClick(temp)}>click</button>
</>)
}