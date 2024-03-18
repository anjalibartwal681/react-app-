import React, { useReducer } from 'react';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unexpected action');
  }
};

// Component
const Counter = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

 const Increment=()=>{
    dispatch({ type: 'increment' })

}

const  Decrement=()=>{
    dispatch({t:'decrement'})
} 

const Reset=()=>{
    dispatch({t:'reset'})  
}
 
  return (
    <div>
      <h1>Count: {state.count}</h1>
      {/* Dispatch actions to modify state */}
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;


