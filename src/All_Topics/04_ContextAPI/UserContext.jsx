import React, { createContext } from "react";
import HomePgae from "./HomePgae";

//!step1 : create a context and export it
export const storeRoom = createContext(); //return ContextObject

//!step2: provie a context
const UserContext = (props) => {
  console.log(props);
  let data1 = "Admin";

  return (
    <div>
      <h1> I am Context File</h1>
      <storeRoom.Provider value={data1}>
        {props.children}
        </storeRoom.Provider>
    </div>
  );
};

export default UserContext;

// 1. Create a Context
// 2. Provide a Context
// 3. Use a Context, or Consume
