import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListFormJson = () => {
  const [list, setList] = useState([]);
  const [alldata, setAlldata] = useState([]);
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setList(response.data);
      setAlldata(response.data);
    };
    fetchData();
  }, []);

  const Getdata = (e) => {
    const inputValue = e.target.value;
    setInfo(inputValue);

    if (!inputValue) {
      setList(alldata);
    } else {
      const firstLetter = inputValue.charAt(0).toLowerCase();
      const searchItem = alldata.filter((item) =>
        item.name.toLowerCase().startsWith(firstLetter)
      );
      setList(searchItem);
    }
  };

  // Styles
  const containerStyle = {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ccc",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid black",
  };

  const headingStyle = {
    fontSize: "21px",
    height: "30px",
    color: "red",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid black",
    borderRadius: "4px solid black",
  };

  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Users Details</h1>
        <input
          placeholder="Search User by name"
          value={info}
          onChange={Getdata}
          style={inputStyle}
        />
      </div>
      <table
        style={{ backgroundColor: "#ffff", margin: "auto", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>City</th>
            <th style={tableCellStyle}>Zipcode</th>
            <th style={tableCellStyle}>Latitude</th>
            <th style={tableCellStyle}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{data.id}</td>
              <td style={tableCellStyle}>{data.name}</td>
              <td style={tableCellStyle}>{data.email}</td>
              <td style={tableCellStyle}>{data.address.city}</td>
              <td style={tableCellStyle}>{data.address.zipcode}</td>
              <td style={tableCellStyle}>{data.address.geo.lat}</td>
              <td style={tableCellStyle}>{data.address.geo.lng}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListFormJson;
