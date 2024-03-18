import React, { useState } from "react";

const data = [
  { id: 1, name: "shekhar", edit: false },
  { id: 2, name: "sachine", edit: false },
];

export default function TaskAddRemoveUpdate() {
  const [list, setList] = useState(data);
  const [temp, setTemp] = useState("");
  const [count, setCount] = useState(3);
  const [temp1, setTemp1] = useState("");

  const handleInputData = (e) => {
    setTemp(e.target.value);
  };

  const handleAddTask = () => {
    setCount((prev) => prev + 1);
    const user = { id: count, name: temp, edit: false };
    setList([...list, user]);
    setTemp("");
  };

  const handleEditTask = (clickedItem) => {
    const updatedEdit = list.map((item) =>
      item.id === clickedItem.id ? { ...item, edit: !item?.edit } : item
    );
    setList(updatedEdit);
  };

  const handleUpdateOnchange = (e) => {
    setTemp1(e.target.value);
  };

  const handleUpdate = (clickedItem) => {
    const updatedName = list.map((item) =>
      item.id === clickedItem.id
        ? { ...item, name: temp1, edit: !item?.edit }
        : item
    );
    setList(updatedName);
    setTemp1("");
  };

  const handleDeleteTask = (clickedItem) => {
    const updateList = list.filter((item, index) => item.id !== clickedItem.id);
    setList(updateList);
  };

  return (
    <div>
      <input value={temp} onChange={handleInputData} />
      <button onClick={handleAddTask}>Add</button>
      {list.map((item, index) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          id:{item.id} name:{item.name}
          {item.edit ? (
            <>
              <input value={temp1} onChange={handleUpdateOnchange} />
              <button onClick={() => handleUpdate(item)}>Save</button>
              {/* {/ Wrap handleUpdate inside an arrow function /} */}
            </>
          ) : (
            <>
              <button onClick={() => handleEditTask(item)}>Edit</button>
              <button onClick={() => handleDeleteTask(item)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
