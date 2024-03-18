/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

const UserData = [
  { name: "Abc", age: 12, add: "rishikesh" },
  { name: "Abcd", age: 12, add: "rishikesh" },
  { name: "Abcdef", age: 12, add: "dehradun" },
];
const customUserHook = () => {
  const [user, setUser] = useState();

  const GetData = () => {
    setUser(UserData);
  };
  return user;

  // eslint-disable-next-line no-unreachable, react-hooks/rules-of-hooks
  useEffect(() => {
    GetData();
  }, []);
};

export default customUserHook;
