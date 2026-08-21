import React, { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMunus] = useState(100);
  
  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };

  //! return memoized value
  let multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //!return memoized function
  let data = useCallback(() => {}, []);

  return (
    <div>
      <h1>Optimization Hooks - useMome and useCallback</h1>
      <h2>Addition : {add}</h2>
      <button onClick={() => setAdd(add + 1)}>increment</button>
      <hr />
      <h2>Substraction : {minus}</h2>
      <button onClick={() => setMunus(minus - 1)}>decrement</button>
      <hr />
      <h2>Multiplication : {multiply}</h2>
      <hr />
      <Child x={data} />
    </div>
  );
};
export default Optimization;

//! useCallback
//It's a React Hook that caches (memoizes) a function definition between component re-renders, By default, every time a component re-renders, all functions declared inside it are recreated from scratch, useCallback prevents this recreation by maintaing the same function reference across renders unless its dependencies change.

//! useMemeo
//IT is built-in React hook designed to optimize performances by caching (memoizing) the result of a calculation between component re-renders by default, React re-calculates everything inside your component on every single render, usememo stops this behaviors for intensive operations, only re-renning them when specific dependencies change.
