import React from "react";

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "Henry" },
  { id: 3, name: "Jane" },
  { id: 4, name: "Clark" },
];

const UserList = () => {
  return (
    <div>
      <h1>Learn List in React</h1>
      {users.map((ele) => {
        console.log(ele);
        return (
          <section key={ele.id}>
            <h3>{ele.name}</h3>
            <button>Hire me</button>
            <button>Edit</button>
            <button>Delete</button>
          </section>
        );
      })}
    </div>
  );
};

export default UserList;
