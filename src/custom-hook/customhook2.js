// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useFetch from "./useFetch";

export default function ShowData() {
  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/anjalibartwal681/javascript/main/student-data.json"
  );

  return loading ? (
    <h1>.......loading</h1>
  ) : (
    <>
      <table>
        {data.map((item) => (
          <div key={item.id}>
            {item.id}
            {item.name}
            {item.contact}
          </div>
        ))}
      </table>
    </>
  );
}
