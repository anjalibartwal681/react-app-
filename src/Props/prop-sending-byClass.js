import { useState } from "react";
import Student1 from "./Student-info";
import Student2 from "./prop-using-class";
import  React from'react'

class  Student extends React.Component {
    constructor(){
        super();
        this.state={
            name:"anji"
        }
    }
    render(){
// const [name,setName]=useState("anjali")
    return(
        <div>
    <h1>Konnichiwa</h1>
        {/* <Student1 name={"ap"} />  */}
        {/* <Student1 name={"anta"} email="anjali@gmail.com" other={{address:"japan",mobile:"000"}}/>
        <Student1 name={"kawai"} email="anjali@gmail.com" other={{address:"nagayu",mobile:"000"}}/> */}
        {/* <Student1 name={name}/>  */}
        <Student2 name={this.state.name} />
        <button onClick={()=>{this.setState({name:"ap"})}}>updateConact</button>

        </div>
   
)}}
 export default  Student