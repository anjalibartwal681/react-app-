import React from "react";

function Information({cls,name,age} ) {
    
    return (
        <>
            <h1>be alert</h1>
            <h2>{cls}</h2>
            <h1>{name}</h1>
            <h1>{age}</h1>


        
        </>
    );



}
export default Information

/*function Information(props ) {
    const {cls,name,age}=props || {};
    return (
        <>
            <h1>be alert</h1>
            <h2>{cls}</h2>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    );



}
export default Information*/