import { useState } from "react"

 function Input(){
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(false)
     function getData(val){
        debugger
console.log(val.target.value)
debugger
  setData(val.target.value)
  setPrint(false)
     }
        return(
            <div>
                {
                    print?<h1>{data}</h1>:null
                }
                <h1>get Input  box value</h1>
              <input type="text" onChange={getData}/>  
             <button onClick={()=>{setPrint(true)}} >print</button>
            </div>
        )
    
 }

 export default Input