import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(url);
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading];
};

export default useFetch;
