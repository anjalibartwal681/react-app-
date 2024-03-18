import React, { useReducer } from "react";

// let intialstate = {
//   id: 1,
//   name: "",
//   fee: 1000,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "school":
//       return { id: state.id += 1, name: "anjali", fee: state.fee += 2500 };

//     case "tution":
//       return { id: state.id += 1, name: "abc", fee: state.fee += 1000 };
//     case "reset":
//       return {...state, id: 0,fee:0 };
//     default:
//       throw new Error("no student define");
//   }
// };

// function StudentData() {
//   const [state, dispatch] = useReducer(reducer, intialstate);
// return(
//   <>
//     <h1>
//       {state.id} {state.name}
//       {state.fee}
//     </h1>
//     <button onClick={() => dispatch({ type: "school" })}>school fee</button>
//     <button onClick={() => dispatch({ type: "tution" })}>tution fee</button>
//     <button onClick={() => dispatch({ type: "reset" })}>reset</button>
//   </>);
// }

const reducer=(state,action)=>{
  if(action.type==="increment"){
    return{age:state.age +=1}
  }


}

function StudentData(){

const[state,dispatch]=useReducer(reducer,{age:14})
return(
  <>
<button onClick={()=>{dispatch({type:'increment'})}}>click</button>
{state.age}

  </>
)


}



export default StudentData;
