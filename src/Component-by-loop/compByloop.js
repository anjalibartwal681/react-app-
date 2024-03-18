import React from "react";
import User from "./User";

const CompByLoop = () => {
  const users = [
    {
      name: "abc",
      email: "anjalibartwal1@gmail.com",
      phone: 9735285678,
      address: [{ HN: 10, city: "rishikes" }],
    },
    {
      name: "anjali",
      email: "anjalibartwal1@gmail.com",
      phone: 9735232645,
      address: [{ HN: 12, city: "dehradun" }],
    },
    {
      name: "subham",
      email: "Shubhm@gmail.com",
      phone: 7689023450,
      address: [{ HN: 14, city: "Delhi" }],
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th colSpan="2">Address</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>HN</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <User key={index} userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default CompByLoop;
