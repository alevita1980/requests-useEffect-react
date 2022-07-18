import { useEffect, useState } from "react";

const colores = ["blue", "red", "green", "yellow", "orange", "gray"];

const UseEffect06 = () => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(colores[index]);

  useEffect(() => {
    if (index > colores.length - 1) {
      setIndex(0);
    } else {
      setColor(colores[index]);
    }
  }, [index]);

  return (
    <div>
      <button
        onClick={() => {setIndex(index + 1)}}> Presioname!</button>
      <div style={{margin: "30px", width: "100px", height: "100px", background: color }}>
        {colores[index]}
      </div>
    </div>
  );
};
export default UseEffect06;
