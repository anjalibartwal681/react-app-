import React from "react";


function Action() {

  let data="anjali"
  const a = () => {
    data="peter"/// state and props we use to overcome thse situation
    alert(data);
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={a}>Click</button>
    </div>
  );
}

export default Action;
