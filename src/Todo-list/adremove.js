import React from "react";
import { useState } from "react";
function AdREMove() {
  const [input, setInput] = useState();

  return (
    <div>
      <input value={input} />
    </div>
  );
}
export default AdREMove;
