import React from "react";
import Todo1 from "./todo1";
const Todos = ({ todos }) => {
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((items, index) => {
                return (
                    <div key={items.id}>
                     {/* <h1>{items.id}{items.list}</h1> */}
                        <Todo1 data_id={items.id} data_list={items.list} />
                    </div>);
            })}
        </>
    ); 
};

export default  memoTodos