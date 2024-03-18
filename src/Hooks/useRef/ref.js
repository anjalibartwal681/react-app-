import { useRef, useState } from "react";


// function RefExample() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.value=1+2;
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// export default RefExample;
 function RefExample(){

    const inputElement =useRef()
    const[temp,setTemp]=useState(0); 

   const FocusInput =()=>{
setTemp((prev)=>prev+1)
    inputElement.current.value=temp
   };  
  
   return(
    <>
    {}
    <input type="text"   ref={inputElement} />
    <button onClick={FocusInput}>Focus Input</button>
    {console.log("abcd")}
    </>
   )
 }


 export default RefExample




 