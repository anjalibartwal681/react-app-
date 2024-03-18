import { useState } from "react";
import Student1 from "./Student-info";
import Student2 from "./prop-using-class";
function   Student(){
const [name,setName]=useState("anjali")
    return(
        <div>
    <h1>Konnichiwa</h1>
        {/* <Student1 name={"ap"} />  */}
        {/* <Student1 name={"anta"} email="anjali@gmail.com" other={{address:"japan",mobile:"000"}}/>
        <Student1 name={"kawai"} email="anjali@gmail.com" other={{address:"nagayu",mobile:"000"}}/> */}
        <Student1 name={name}/> 
        <button onClick={()=>{setName("app")}}>updateConact</button>
<Student2 namae="anjali" />
        </div>
   
)}
 export default  Student 
