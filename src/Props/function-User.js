// pass function as props
import React from "react";
function User(props){

    return(
        <div>
            <h1>user components</h1>
            <button onClick={props.data}>click</button>
        </div>
    )
}
export default User