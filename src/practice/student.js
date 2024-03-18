import React from 'react';
import Information from '../data/prop';

const image=require("C:/Users/anjali/Desktop/React/my-react-app/src/assets/shiva.jpg");

const imageStyle={width:'200px'};//javascript css-nb

function Student(props) {
    const { name } = props || {};
    return (
        <div>
            <h1>dfogfdhoi</h1>
            <img
            src={image} alt='shiva' style={imageStyle} ></img>
            <h1>{name}</h1>
            <h1>dfiohoifg</h1>
            <Information cls="xyz" name="sschin" age="21"/>  
<h1>jsx</h1>
                    
        </div>



    );
}
export default Student;
