import React, { useState } from "react";
 function Login(){
    const[userId,setId]=useState("")
    const[password,setPassword]=useState("")
    const[userErr,setuserErr]=useState(false)
    const[passErr,setPassErr]=useState(false)
  function  LoginHandle(e){
    if(userId.length<3|| password.length<8){
        alert("type correct value")
    }
    else{
        alert("all good:")
    }
 e.preventDefault()
    }

function UserHandler(e){
    let item=e.target.value
    if(item.length<3)
    {  setuserErr(true)}
    else{
    
    
    setuserErr(false)}
    setId(item)
}

function PassHandler(e){
    let item=e.target.value
    if(item.length<8)
    {  setPassErr(true)}
    else{
    
    
    setPassErr(false)}
    setPassword(item)
}



    return(
        <div>
            <h1>Login</h1>
            <form onClick={LoginHandle}>
            <input type="text" placeholder="Enter user Id" onChange={UserHandler}/>{userErr?<span>user  not invalid</span>:""}
            <br></br>
            <input type="text" placeholder="Enter user password"onChange={PassHandler}/>{passErr?<span>not a valid password</span>:""}
            <br/><br/>
            <button type="submit">submit</button></form>  
        </div>
    )
 }

 export default Login