// Ejercicio N°2:
// Modifique la función "getUser()" para que pueda ser invocada por el componente "Ejercicio2"
// Es una operación simple pero le ayudará a entender cómo reutilizar su código en los componentes.


import { useState } from "react";
import axios from "axios";

const getUser = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(response);
    //   setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }


const Ejercicio2 = () => {
  const [data, setData] = useState("No Data")
  return <>
    <button onClick={() => getUser(/*????????*/)}> GET USER DATA</button>
    <ul style={{ textAlign: "start" }}>
      <li>userId: {data === "No Data" ? "No Data" : data.userId}</li>
      <li>id: {data === "No Data" ? "No Data" : data.id}</li>
      <li>title: {data === "No Data" ? "No Data" : data.title}</li>
      <li>completed: {data === "No Data" ? "No Data" : data.completed}</li>
    </ul>
  </>
};
export default Ejercicio2;


// Respuesta:
// El hook useState solo puede ser invocado dentro del cuerpo de la función del componente, por ello,
// Si queremos que nuestra función "getUser()" haga uso de nuestro hook, debemos pasarselo como argumento:
// <button onClick={() => getUser(setData)}> GET USER DATA</button>

// Luego en nuestra función debemos declarar éste parámetro:
// const getUser = async (miFuncion) => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//       console.log(response);
//       miFuncion(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   }