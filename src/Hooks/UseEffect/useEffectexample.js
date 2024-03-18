import React, { useCallback, useEffect, useMemo, useState } from "react";

function UseEffectExample() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  const handle = () => {
    setData(data + 1);
  };

  let inputvalue = useMemo(() => {
    return data + 1;
  }, [data]);

  const inputvalue1 = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <>
      <h1>{data}</h1>
      <h2>count: {count}</h2>
      <h2>{inputvalue}</h2>
      <button onClick={inputvalue1}>useCallback Click</button>
      <button onClick={handle}>Click</button>
    </>
  );
}

export default UseEffectExample;
