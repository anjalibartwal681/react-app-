import { useState } from "react"

function State1(){
const[data,SetData]=useState("anjali")
    return(
        <div>
<h1>app contacts</h1>
<h1>{data}</h1>
<button  onClick={()=>{SetData("amnbnmbj")}}>click</button>
        </div>
    )
}

export default State1
