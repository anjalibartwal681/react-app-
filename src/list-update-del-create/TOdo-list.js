import react, { useState } from "react";

function AddTOdayList() {
  const [list, setList] = useState([]);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [count, setCount] = useState(1);

  const getInputValue = (e) => {
    setInput1(e.target.value);
    // console.log(e.target.value)
  };

  const Addlist = () => {
    setCount((prev) => prev + 1);
    let user = { id: count, name: input1, edit: false };
    //  console.log(input1)

    setList([...list, user]);
    console.log(list);
    setInput1("");
  };

  const update = (e) => {
    setInput2(e.target.value);
  };
  const handleupdate = (onclickItem) => {
    const updateName = list.map((item) =>
      item.id === onclickItem.id
        ? { ...item, name: input2, edit: !item.edit }
        : item
    );

    setList(updateName);
    setInput2("");
  };

  const handleEdit = (onclickItem) => {
    const editItem = list.map((item) =>
      item.id === onclickItem.id ? { ...item, edit: !item.edit } : item
    );
    setList(editItem);
  };

  const RemoveItem = (clickedItem) => {
    const updatedlist = list.filter((item) => item.id !== clickedItem.id);
    setList(updatedlist);
  };

  return (
    <>
      <input type="text" value={input1} onChange={getInputValue} />

      <button onClick={Addlist}>click</button>
      {list.map((item) => (
        <div key={item}>
          {item.id} {item.name}
          {item.edit ? (
            <>
              <input type="text" value={input2} onChange={update} />
              <button onClick={() => handleupdate(item)}>save</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(item)}>edit</button>
              <button onClick={() => RemoveItem(item)}>del</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default AddTOdayList;
