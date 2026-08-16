import React from "react";

const Child = (props) => {
  console.log("Child", props);

  return (
    <div>
      <h1>Child Page </h1>
    </div>
  );
};

//! here we use React.memo()
export default React.memo(Child);
