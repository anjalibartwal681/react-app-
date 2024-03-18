import React, { useState } from "react";

const data = [
  { id: 1, name: "book reading", edit: false },
  { id: 2, name: "travelling", edit: false },
  { id: 3, name: "visiting pilgrims places ", edit: false },
];

export default function TaskAddRemoveUpdate() {
  const [list, setList] = useState(data);
  const [temp, setTemp] = useState("");
  const [count, setCount] = useState(4);

  const handleAddOnClick = () => {
    if (!temp) {
      alert("Please enter a value");
      return;
    }
    setCount((prev) => prev + 1);
    const user = { id: count, name: temp, edit: false };
    setList([...list, user]);
    setTemp("");
  };

  const handleEditOnClick = (index) => {
    const updatedList = [...list];
    updatedList[index] = {
      ...updatedList[index],
      edit: !updatedList[index].edit,
    };
    setList(updatedList);
  };

  const handleInputOnChange = (e, index) => {
    const updatedList = [...list];
    updatedList[index] = { ...updatedList[index], name: e.target.value };
    setList(updatedList);
  };

  const handleSaveOnClick = (index) => {
    const updatedList = [...list];
    updatedList[index] = {
      ...updatedList[index],
      edit: !updatedList[index].edit,
    };
    setList(updatedList);
  };

  const handleDeleteOnClick = (clickedIndex) => {
    const updatedList = list.filter((item, index) => index !== clickedIndex);
    setList(updatedList);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginTop: 20,
          paddingTop: "20px",
          backgroundColor: "#f5f5f5",
          width: "60%",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      >
        <input
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          placeholder="Enter a list"
          style={{
            width: "60%",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            paddingLeft: "10px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddOnClick}
          style={{
            width: "100px",
            height: "40px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add
        </button>

        {list.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <div style={{ flex: 1 }}>
              {item.edit ? (
                <input
                  value={item.name}
                  onChange={(e) => handleInputOnChange(e, index)}
                  style={{
                    width: "70%",
                    height: "30px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    outline: "none",
                    paddingLeft: "5px",
                  }}
                />
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              {item.edit ? (
                <button
                  onClick={() => handleSaveOnClick(index)}
                  style={{
                    width: "70px",
                    height: "30px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleEditOnClick(index)}
                    style={{
                      marginRight: "5px",
                      width: "70px",
                      height: "30px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteOnClick(index)}
                    style={{
                      width: "70px",
                      height: "30px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
