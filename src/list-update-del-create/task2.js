// import React, { useState } from "react";

// function MyList (){

//     const[input1,setInput]=useState();
//     const[count,setCount]=useState(1);
//     const[list,setList]=useState([]);

// const getInputValue=(e)=>{
//  setInput(e.target.value);
// }

// const addlist=()=>{
//    setCount((prev)=>prev+1)
// let user={id:count, name:input1,edit:false}
// console.log(input1)
// setList([...list,user]);
// console.log(list)
// setInput('')

// };


// const  handleEdit=(onclickindex)=>{
// const edititem=[...list]
// edititem[onclickindex]={...edititem[onclickindex],edit:!edititem[onclickindex].edit}
// setList(edititem)}
// const saveEdit = (index, newName) => {
//     const updatedList = [...list];
   
//     updatedList[index].name = newName;
//     updatedList[index].edit = false;
//     setList(updatedList);
//   };







//     return(
    
//         <div>

//          <input type="text" value={input1}  onChange={getInputValue}/> 
//          <button  onClick={addlist}>click</button>


//          {list.map((item,index) => (
//         <div key={item.id}>
//           {item.name}, {item.edit ?
//             (
//               <>
//                 <input type="text" value={item.name} onChange={(e) => setInput(e.target.value)} />
//                 <button onClick={(e)=>{handleSave(e,index)}}>save</button>
//               </>
//             ) :
         
//          (<>
//          <button onClick={()=>handleEdit(index)}>edit</button>
//          <button>del</button>
         
//          </>) }





//             </div>
//          )
         
//          )}

//         </div>
        
        
       
//     )


// }

// export default MyList