// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCustom } from "./customhook";

const CallCustomHook = () => {
  const { data } = useCustom();
  return <>{data}</>;
};

export default CallCustomHook;
