import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count ? count - 1 : 0);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div style={{}}>
      <h1>Counter Application</h1>

      <h2>Counter : {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter1;
