import { useRef } from "react"

function Refexample1(){

    const inputvalue=useRef();
    const effect=()=>{
inputvalue.current.focus();
inputvalue.current.value="anjali";
    }
    return(
        <>
        <input  ref={inputvalue}/>
        
        <button onClick={effect}>click</button>
        </>
    )
}
export default Refexample1