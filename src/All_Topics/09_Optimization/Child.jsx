import React from "react";

const Child = (props) => {
  console.log("Child", props);

  return (
    <div>
      <h1>Child Page </h1>
    </div>
  );
};

//! here we use React.memo() // That is work like memoised the components value, 
export default React.memo(Child);
