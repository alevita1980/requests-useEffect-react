import { useEffect, useState } from "react";
import axios from "axios";
import Animation from "../animations/exampleAnimation";

const UseEffect04 = () => {
  const [users, setUsers] = useState("Loading...");
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setUsers(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userList = (user) => {
    return (
      <ul>
        <li>userId: {user.userId}</li>
        <li>id: {user.id}</li>
        <li>title: {user.title}</li>
        <li>completed: {user.completed}</li>
      </ul>
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Prueba 04: Lista completa de usuarios</h1>
      <h2>Usuarios:</h2>

      {users === "Loading..." ? (
        <Animation />
      ) : (
        users.map((user) => userList(user))
      )}
    </div>
  );
};
export default UseEffect04;
