import { useState } from "react";

function UseRefWithSplit() {
  

      const [inputValue, setInputValue] = useState("");
      const [nonEmptyCount, setNonEmptyCount] = useState(null);
    debugger
      const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    debugger
        // Split the input value by spaces and check if the resulting array has any elements
        if (newValue.split(" ").filter(Boolean).length === 0) {
          setNonEmptyCount((prevCount) => prevCount + 1);
        }
      };
    debugger
      const handleKeyDown = (e) => {
        if (e.key === 'Backspace' && inputValue.trim() !== "") {
          setNonEmptyCount((prevCount) => prevCount - 1);
        }
    
        if (e.key !== ' ' && inputValue.trim()!== "") {
          //it will not count  backspace
          setNonEmptyCount((prevCount) => prevCount + 1);
        }
      };
    
      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <h1>Non-Empty Input Count: {nonEmptyCount}</h1>
        </>
      );
    }
    
  
export default UseRefWithSplit;
