import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Todo1 = () => {
  const users = [
    {
      Name: "anjali",
      email: "anjali@gmail.com",
      Address: [{ HN: "10", city: "gumaniwala" }],
    },
    {
      Name: "urmila",
      email: "urmila@gmail.com",
      Address: [{ HN: "15", city: "somecity" }],
    },
  ];

  const [value, setValue] = useState();

  const addvalue = (name) => {
    setValue(name);
    console.log(name);
  };
  return (
    <>
      <Table variant="dark">
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.email}</td>
              <td>
                <Table>
                  <tbody>
                    {item.Address.map((data, index) => (
                      <tr key={index}>
                        <td>{data.HN}</td>
                        <td>{data.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Todo1;
