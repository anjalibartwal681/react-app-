import React, { useCallback, useMemo, useState } from "react";

function User() {
  const [data, setData] = useState(0);

  const callback = useMemo(() => {
    return data + 1;
  }, [data]);

  return (
    <>
      {data}

      <button onClick={() => setData((prev) => prev + 1)}>click</button>
    </>
  );
}
export default User;
