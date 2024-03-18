import React from "react";
import useFetch from "./useFetch";
import DataDisplay from "./dataDisplay";

const Customhook = () => {
  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/Chandrashekhar56/JavaScript-concepts/main/student.json"
  );
  console.log(data);
  return loading ? (
    <h1>...loading</h1>
  ) : (
    <>
      <DataDisplay data={data} />
    </>
  );
};

export default Customhook;
