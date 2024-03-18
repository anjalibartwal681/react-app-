import react, { useState } from "react";

function AddTOdayList2() {
  const [list, setList] = useState([]);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [count, setCount] = useState(1);

  const getInputValue = (e) => {
      setInput1(e.target.value);
  };
  

  const Addlist = () => {
    if (!input1) {
      alert("Please enter  something");
    } else {
      setCount((prev) => prev + 1);
      let user = { id: count, name: input1, edit: false };
      setList([...list, user]);
      setInput1("");
    }
    

  };

  const update = (e) => {
    setInput2(e.target.value);
  };


  const handleEdit = (onclickIndex) => {
    const editItem = [...list];
    // console.log(list)

    editItem[onclickIndex]={...editItem[onclickIndex],edit:!editItem[onclickIndex].edit}
    setInput2(editItem[onclickIndex].name);
    // console.log("im input 1",editItem[onclickIndex].name)
    setList(editItem);
    console.log(editItem)

  };


  const handleupdate = (onclickIndex) => {
    console.log(onclickIndex)
    const editItem = [...list];
    editItem[onclickIndex]={...editItem[onclickIndex],name:input2,edit:!editItem[onclickIndex].edit}
    setList(editItem);
    console.log(editItem)
    setInput2('')
  };
//   const RemoveItem = (clickedIndex) => {
//     const updatedlist = list.filter((index) => index !== clickedIndex);
//     setList(updatedlist);
//   };

const RemoveItem = (clickedIndex) => {
    const updatedList = list.filter((item, index) => index !== clickedIndex);
    setList(updatedList);
  };
  
  return (
    <div style={{backgroundColor:'#e1f2e6' ,width:'250px', height:'350px',alignItems:'center',margin:'35%',padding:'20px'}}>
    <div> <h1>Todo List</h1> 
       <input type="text" value={input1} onChange={getInputValue} /></div>

      <button onClick={Addlist}>click</button>
      {list.map((item,index) => (
        <div key={item}>
          {item.id} {item.name}
          {item.edit ? (
            <>
            <br/>
            <br/>
            
              <input type="text" value={input2} onChange={update}  style={{marginTop:'20px'}}/>
              <button onClick={() => handleupdate(index)}>save</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(index)}>edit</button>
              <button onClick={() => RemoveItem(index)}>del</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddTOdayList2;
