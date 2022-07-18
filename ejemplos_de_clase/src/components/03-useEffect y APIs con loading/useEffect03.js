import { useEffect, useState } from "react";
import axios from "axios";
import Animation from "../animations/exampleAnimation";


const UseEffect03 = () => {
  const [user, setUser] = useState(true); // --> LOADING!

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
    <div >
      <h1>Prueba 03: ahora con animación en la carga ;)</h1>
      <h2 style={{display:"flex", gap:"25px"}}>Usuario: {user===true ? <Animation/> : `${user.title}`}</h2>
    </div>
  );
};
export default UseEffect03;
