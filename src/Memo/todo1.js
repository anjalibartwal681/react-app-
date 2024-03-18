// import React from "react";

// function Todo1({ data_id, data_list}){
// return(
//     <div>
//         <h1>{data_id}:{data_list}</h1>
//     </div>
// )
// }
// export default Todo1


import React from "react";
function Todo1(props){
    return(
        <div>
      <h1 style={{color:'red'}}>{props.data_id}</h1>
     <h1 style={{color:'black'}}>{props.data_list}</h1>
        </div>
    )
}
export default  Todo1