import React from "react";

const User = (props) => {
  const { name, email, phone, address } = props.userData;
  const heading = { margin: "20px" };
  return (
    <tr>
      <h1>User comp</h1>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        {address.map((addr, index) => (
          <div key={index}>
            <span> {addr.HN}</span>
            <span> {addr.city}</span>
          </div>
        ))}
      </td>
    </tr>
  );
};

export default User;
