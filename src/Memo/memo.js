import React,{ useState} from "react";
import Todo from "./Todo";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {id:1, list:"todo 1"}, 
    {id:2,list:"todo 2"}]);

  const increment = () => {
    console.log("setCount");
    setCount((c) => c + 1);
  };
  

  return (
    <>
      <Todo todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
 export default MemoExample

