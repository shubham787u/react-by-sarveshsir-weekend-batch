import React from "react";
import Child from "./Child";
import NestedChild from "./NestedChild";

const Parent = () => {
  const data = "Hii";
  const data2 = { name: " Shubham" };
  const data3 = "Send to Nested Child";

  return (
    <div>
      <h1>I am Parent Component</h1>

      <Child x={data} y={data2}  z={data3}/>
      {/* <NestedChild /> */}
    </div>
  );
};

export default Parent;
