  import React, { useState } from "react";

  const data=[{value:'A',value1:'B',value3:'c'}]
  function CheckBox(){
const [data,setData]=useState();

const[check,ischecked]=useState(false)
const [data1,setData1]=useState();

const checkValue=(e)=>{
    ischecked(e.target.checkbox)
    
}

let handleValue=()=>{
let values={}


}




return(<>
<div style={{display:'flex'}}>
<li>
<input type="checkbox" value={data}  checked={ischecked} onChange={checkValue}/> <h1>{data}</h1>
<li>
<input type="checkbox" value={data}  checked={ischecked} onChange={checkValue}/> <h1>{data}</h1>
</li>
</li>

</ul>
</>)

  }


  export default CheckBox;
