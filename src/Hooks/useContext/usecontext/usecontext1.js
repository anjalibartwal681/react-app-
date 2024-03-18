import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("nnkn");

  return (
    <UserContext.Provider value={user}>
      {user}
      <Component2 user={user}/>
    </UserContext.Provider>
  );
}

function Component2({user}) {
  return <div>{user}</div>;
}
