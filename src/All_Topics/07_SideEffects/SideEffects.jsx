import React, { useState } from "react";
import TodosList from "./TodosList";

const SideEffects = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div>
      <h1>Learn useEffect Hook</h1>
      <button onClick={handleToggle}>Toggle me! </button>
      {/* {toggle && <TodosList />}  */} 
      {toggle ? <TodosList /> : ""}
    </div>
  );
};

export default SideEffects;
