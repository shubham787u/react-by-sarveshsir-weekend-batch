import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); //[ud, f]-[state variable, updated function] = useState()

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count ? count - 1 : 0);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1> Create Counter using States in FBC</h1>
      <h2>Count = {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
