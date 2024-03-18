import React, { useReducer } from 'react';

let initialState={count:0,name:'piyush'}
const reducer=(state,action)=>{
switch(action.type){

case'increment': 
return {count: state.count+1,name:'Anjali'}

case'decrement':
return{count:state.count-1,name:"shiya"}

case'reset':
return{count:0,name:"jiya"}
default:
    throw new  Error("unexpected action")
}
}
 function Reducer1(){
const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <p>Count: {state.count}</p>
      <h1>Name:{state.name}</h1>
      <h1>reducer</h1>
      
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  );
  }
export default Reducer1
