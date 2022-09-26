import { useState } from "react";
import axios from "axios";

const Axios00 = () => {
  const [data, setData] = useState("No Data")

  const getUser = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(response);
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  return <>
    <button onClick={() => getUser()}> GET USER DATA</button>
    <ul style={{ textAlign: "start" }}>
      <li>userId: {data === "No Data" ? "No Data" : data.userId}</li>
      <li>id: {data === "No Data" ? "No Data" : data.id}</li>
      <li>title: {data === "No Data" ? "No Data" : data.title}</li>
      <li>completed: {data === "No Data" ? "No Data" : data.completed}</li>
    </ul>
  </>
};
export default Axios00;
