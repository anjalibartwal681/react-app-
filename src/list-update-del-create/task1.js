import React, { useState } from "react";

function MyTodayList() {
  const [list, setList] = useState([]);
  const [input1, setInput1] = useState();
  const [count, setCount] = useState(1);

  const getInputValue = (e) => {
    setInput1(e.target.value);
  };

  const Addlist = () => {
    setCount((prev) => prev + 1);
    const user = { id: count, name: input1, edit: false };
    setList([...list, user]);
    setInput1("");
  };
  const handleEdit=(clickindex)=>{
  const editItem = [...list];
  editItem[clickindex]={...editItem[clickindex],edit:!editItem[clickindex].edit};
  setList(editItem);
  }

const updateOnchnege=(e,clickindex)=>{
const editItem=[...list];
editItem[clickindex]={...editItem[clickindex],name:e.target.value};

console.log(editItem[clickindex]);
setList(editItem);
}

 const  handleSave=(clickindex)=>{
  const editItem = [...list];
  editItem[clickindex]={...editItem[clickindex],edit:!editItem[clickindex].edit};
  setList(editItem);

 }

 const RemoveItem=(clickindex)=>{
const updatedlist=list.filter((item,index)=>index !==clickindex)
setList(updatedlist)

 }


  return (
    <div style={{}}>
      <input type="text" value={input1} onChange={getInputValue} />
      <button onClick={Addlist}>click</button>

      {list.map((item, index) => (   
        <div key={item?.id}>
          {item?.id} {item?.name}
          {item?.edit ? (
            <>
            
              <input value={item.name} onChange={(e)=>updateOnchnege(e,index)}  />
              <button onClick={()=>{handleSave(index)}}>save</button>
            </>
          ) : (
            <>
              <button  onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>RemoveItem(index)}>Del</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyTodayList;
