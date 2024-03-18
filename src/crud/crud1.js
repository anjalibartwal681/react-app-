import React, { useState } from "react";

function List() {
  const [arr1, setArr1] = useState([1, 2, 3]);
  const [arr2, setArr2] = useState(["a", "b", "c"]);

  const handleSwap = (indexA, indexB) => {
    console.log("arr", indexA, "arr2", indexB);
    if (
      indexA >= 0 &&
      indexA < arr1.length &&
      indexB >= 0 &&
      indexB < arr2.length
    ) {
      const temp = arr1[indexA];
      // console.log(temp)
      const newArr1 = [...arr1];
      // console.log(newArr1)
      newArr1[indexA] = arr2[indexB];
      // console.log(newArr1)
      const newArr2 = [...arr2];
      newArr2[indexB] = temp;
      // console.log(newArr2)
      setArr1(newArr1);
      setArr2(newArr2);
    }
  };

  return (
    <>
      <h2>Array 1:</h2>
      <ul>
        {arr1.map((item, index) => (
          <li key={index}>
            {item}
            <input type="checkbox" onChange={() => handleSwap(index, index)} />
            <label>Swwith Array 2</label>
          </li>
        ))}
      </ul>

      <h2>Array 2:</h2>
      <ul>
        {arr2.map((item, index) => (
          <li key={index}>
            {item}
            <input type="checkbox" onChange={() => handleSwap(index, index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
