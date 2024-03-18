// import { useState, useRef } from "react";

// function ExampleOfUseRef() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   const handleChange = (e) => {
//     const newValue = e.target.value;
//     setInputValue(newValue);
    
//     if (newValue.trim() !== "") {
//       // Update count only if the trimmed value of the input is not empty
//       count.current++;
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// export default ExampleOfUseRef;
// ----------------------------------------------------
import { useState } from "react";

function ExampleOfUseRef() {
  const [inputValue, setInputValue] = useState("");
  const [nonEmptyCount, setNonEmptyCount] = useState(0);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim() !== "") {
      setNonEmptyCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <h1>Non-Empty Input Count: {nonEmptyCount}</h1>
    </>
  );
}

export default ExampleOfUseRef;
