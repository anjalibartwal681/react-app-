import React from "react";
import useHook from "./useHook";

export default function DataDisplay({ data }) {
  const [getValue] = useHook();
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>contact</th>
          <th>email</th>
          <th>address</th>
          <th>hobby</th>
          <th>class</th>
          <th>id</th>
          <th>gender</th>
          <th>bloodGroup</th>
        </tr>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item?.name}</td>
            <td>{item?.age}</td>
            <td>{item?.contact}</td>
            <td>{item?.email}</td>
            <td>{item?.address}</td>
            <td>{item?.hobby}</td>
            <td>{item?.class}</td>
            <td>{item?.id}</td>
            <td>{item?.gender}</td>
            <td>{item?.bloodGroup}</td>
          </tr>
        ))}
      </table>

      {getValue}
    </>
  );
}
