import { useState } from "react"

function State(){
    const [data,setData]=useState(0)
function UpdateData(){

setData(data+1)
}
console.warn("____________") ///component doesn't rerender  freezze   he rhta h
return(
    <div className="App">
<h1>{data}</h1>
<button onClick={UpdateData}>Update Data</button>
    </div>
)

}
export default  State