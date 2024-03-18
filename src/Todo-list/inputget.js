import React, { useState } from "react";

function GetValue() {
  const [list, setList] = useState([]);
  const [temp, setTemp] = useState("");
  const [count, setCount] = useState(0);
  const [editValue, setEditValue] = useState("");

  const getValue = (e) => {
    setTemp(e.target.value);
  };

  const setValue = () => {
    setCount(count + 1);
    const user = { id: count, name: temp, edit: false };
    setList([...list, user]);
    setTemp("");
  };

  const handleAddTask = (clickedItem) => {
    const updatedList = list.map((item) =>
      item.id === clickedItem.id ? { ...item, edit: true } : item
    );
    setList(updatedList);
  };

  const handleUpdate = (clickedItem) => {
    const updatedList = list.map((item) =>
      item.id === clickedItem.id
        ? { ...item, name: editValue, edit: false }
        : item
    );
    setList(updatedList);
    setEditValue("");
  };

  const handleDelete = (clickedItem) => {
    const updatedList = list.filter((item) => item.id !== clickedItem.id);
    setList(updatedList);
  };

  const updateValue = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={temp} onChange={getValue} />
      <button type="submit" onClick={setValue}>
        Add
      </button>

      {list.map((items, index) => (
        <div
          key={items.id}
          style={{ display: "flex", flexDirection: "row", margin: "10px" }}
        >
          <p>
            id: {items.id} name:{items.name}
          </p>
          {items.edit ? (
            <div>
              <input type="text" value={editValue} onChange={updateValue} />
              <button onClick={() => handleUpdate(items)}>Save</button>
            </div>
          ) : (
            <div>
              <button
                style={{ margin: "10px" }}
                onClick={() => handleAddTask(items)}
              >
                Edit
              </button>
              <button
                style={{ margin: "10px" }}
                onClick={() => handleDelete(items)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GetValue;
