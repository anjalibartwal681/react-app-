// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export const useCustom = () => {
  const [userData, setUserData] = useState("abbb");

  const handleUserData = () => {
    setUserData("anjali");
  };

  useEffect(() => {
    handleUserData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Return statement within the custom hook
  return { data: userData };
};
