import React, { useEffect, useState } from "react";
import Effect1 from "./useEffect1";
// useEffect is a hook that allows you to perform side effects in functional components. Side effects are operations that happen after the component has been rendered,
//  such as data fetching, subscriptions, manual DOM manipulations.
function Effect() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("useEffect called");                       

    // Cleanup function (optional)
    //  return () => {
    //  console.log("Effect component will unmount or data has changed");
    // //  Cleanup code if needed
    //  };
  }, [count]);

  return (
    <div>
      <Effect1 data={data} count={count} />
      <button onClick={() => { setCount(count + 1) }}>Update Count</button>
      <button onClick={() => { setData(data + 1) }}>Update Data</button>
    </div>
  );
}

export default Effect;
