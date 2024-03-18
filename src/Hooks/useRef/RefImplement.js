import { useState } from "react";

function ExampleOfUseRef1() {
  const [inputValue, setInputValue] = useState("");
  const [nonEmptyCount, setNonEmptyCount] = useState(0);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim() !== ""  ) {

      setNonEmptyCount((prevCount) => prevCount + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && inputValue.trim() !== "") {
      setNonEmptyCount((prevCount) => prevCount - 1);
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

export default ExampleOfUseRef1;
