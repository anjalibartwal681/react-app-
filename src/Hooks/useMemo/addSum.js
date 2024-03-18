// import React, { useCallback, useState } from "react";
// import { useMemo } from "react";

// function MemoExample(){
 
// const[number1,setNumber1]=useState(5);
// const[number2,setNumber2]=useState(1);

// const[number3,setNumber3]=useState(10);
// const[number4,setNumber4]=useState(1);
//  const Add=useMemo(()=>{
//  return  number1+number2
//  },[number1,number2]);


//  const Multi=useMemo(()=>{
//     return  number3*number4
//     },[number3,number4]);

//     const div=useMemo(()=>{
//         return  number3*number4
//         },[number3,number4]);
    
//      const incrementFunc = useCallback(()=>{
      
        
        
//         setNumber1(number1+1)},[number1])
    
//  return(
//     <>
//   <h1>sum {Add}</h1>
//   <h1>Multi{Multi}</h1>

  
//   <button onClick={incrementFunc}>increment</button>
//   {/* <button onClick={()=>{setNumber2((prev)=>prev-1)}}>Decrement</button>
//   <button onClick={()=>{setNumber3((prev)=>prev*2)}}>Mult</button>
//   <button onClick={()=>{setNumber4((prev)=>prev/2)}}>div</button> */}

    
    
//     </>
//  )
//  }

//  export default  MemoExample



import React, { useState, useCallback } from 'react';
import ChildA from '../useCallback/child';

function MemoExample() {
  // State variables
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // Define the memoized callback function
  const incrementFunc = useCallback(() => {
    setNumber1(number1 + 1);
  }, [number1]); // Dependency: number1

  return (
    <div>
      <h1>Number 1: {number1}</h1>
      <h1>Number 2: {number2}</h1>
      <ChildA value={incrementFunc}   />
      <button onClick={incrementFunc}>Increment Number 1</button>
      <button onClick={() => setNumber2(number2 + 1)}>Increment Number 2</button>
    </div>
  );
}

export default MemoExample










