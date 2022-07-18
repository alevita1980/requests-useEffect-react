import { useEffect, useState } from "react";
import axios from "axios";
import Animation from "../animations/exampleAnimation";

const userData = {
  title: 'POST test con axios',
  body: 'Este es el body',
  userId: 1,
}

const AxiosPost05 = () => {
  const [posts, setPosts] = useState({
    title: '',
    body: '',
    userId: 0,
  });

  const userList = (user) => {
    return (
      <ul>
        <li>userId: {user.userId}</li>
        <li>title: {user.title}</li>
        <li>body: {user.body}</li>
      </ul>
    );
  };
  
  const setUser = async () => {
    setPosts("Loading...");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/", userData
      );
      setPosts(response.data);
      console.table(response.data)
    } catch (error) {
      setPosts(
        {
          title: 'ERROR',
          body: 'ERROR',
          userId: 0,
        }
      );
    }
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Prueba 05: Insertamos un usuario</h1>
      <button onClick={()=>setUser(userData)}> Inserte usuario </button>
      <h2>{posts === "Loading..." ? <Animation/> : userList(posts) }</h2>
    </div>
  );
};
export default AxiosPost05;