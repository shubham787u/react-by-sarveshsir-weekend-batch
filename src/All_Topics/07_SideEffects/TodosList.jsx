import { useEffect, useState } from "react";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    let resp = await fetch("https://dummyjson.com/todos");
    let data = await resp.json();
    console.log(data.todos);
    setTodos(data.todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h1>Fetch Todos</h1>
      {todos.map((ele) => {
        return (
          <div key={ele.id}>
            <p>Id : {ele.id}</p>
            <p>UserId : {ele.userId}</p>
            <h2>Work : {ele.todo}</h2>
            {ele.completed ? <del> Completed</del> : <p> Pending </p>}
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
