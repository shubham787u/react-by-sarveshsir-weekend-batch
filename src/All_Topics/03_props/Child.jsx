import React from "react";
import NestedChild from "./NestedChild";

const Child = (props) => {
  return (
    <div>
      <h1>Hii I am Child</h1>
      <h2>{props.x}</h2>
      <h2>{props.y.name}</h2>

      <NestedChild w={props.z} />
    </div>
  );
};


export default Child;
