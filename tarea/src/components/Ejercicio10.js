// Ejercicio N°10:
// Dirijase a la página: https://dummyjson.com/docs/products 
// allí encontrará la documentación para la API que utilizaremos para este ejercicio.
// Realice una llamada a la API https://dummyjson.com/products de tipo GET para obtener una lista de productos.
// La llamada debe realizarse al momento de carga de la pantalla y 
// debe mostrarse una animación mientras la información no esté disponible. 
// Una vez disponible la información, debe mostrarse en una tabla, detallando todos los productos disponibles,
// con su imágen y sus características.
// Puede darle el estilo que desee y utilizar la animación disponible en el directorio "animations",
// también puede utilizar como guía los ejemplos de clase para aplicar la animación o consultar el Ejercicio resuelto.

import axios from "axios";

const url = "https://dummyjson.com/products";

const getProducts = async (callback, url) => {
  try {
    const response = await axios.get(url);
    console.table(response.data);
    callback(response.data.products);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};

const Ejercicio10 = () => {
  return (
    <>
      
    </>
  );
};
export default Ejercicio10;
