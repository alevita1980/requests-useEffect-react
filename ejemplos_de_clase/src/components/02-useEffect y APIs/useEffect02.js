import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect02 = () => {
  const [user, setUser] = useState({ title: "Estado inicial" }); // --> LOADING!

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Usamos setTimeout para exagerar el retraso producido por la API
    setTimeout(() => getUser(), 3000);
  }, []);

  return (
    <div>
      <h1>Prueba 02</h1>
      <h2>Usuario: {`${user.title}`}</h2>
    </div>
  );
};
export default UseEffect02;
