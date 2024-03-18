import React, { useCallback, useState } from "react";
import ChildToParent from "./child-comp";

export default function CallbackFun() {
  const [input, setInput] = useState();

  const fun = useCallback((temp) => {
    setInput(temp);
  }, []);

  fun("dfdfd");
  return (
    <>
      <h1>{input}</h1>
      <ChildToParent fun={fun} />
    </>
  );
}
