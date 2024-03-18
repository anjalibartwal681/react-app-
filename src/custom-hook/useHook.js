/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";

function RapidAPI() {
  const [data, setData] = useState([]);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>data", data);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5988b06025mshba36af245660b64p1e5247jsn4e8c49c1045d",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        let result = await response.json();
        setData(result); // Update state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <div
            style={{
              color: "red",
              marginTop: 20,
              marginBottom: 20,
              background: "green",
              textAlign: "center",
            }}
          >
            {key}
          </div>
          {Array.isArray(data[key]) ? (
            data[key].map((item) => (
              <div style={{ color: "#FF5733" }}>{item}</div>
            ))
          ) : typeof data[key] === "string" ? (
            <div style={{ color: "blue" }}>{data[key]}</div>
          ) : (
            Object.keys(data[key]).map((_key) => {
              console.log(">>>>>>Indside obj", data);
              return (
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                  <div>{_key} :</div>
                  <div style={{ color: "#FF5733" }}>{data[key][_key]}</div>
                </div>
              );
            })
          )}
        </div>
      ))}
    </>
  );
}

export default RapidAPI;
