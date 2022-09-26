import { useEffect } from "react";

const UseEffect00 = () => {
  useEffect(() => {
    console.log("Ahora: ", new Date());
    setTimeout(() => {
      console.log("Después: ", new Date())
    }, 4000);
  }, []);

  return <h1>Prueba 00</h1>;
};
export default UseEffect00;
