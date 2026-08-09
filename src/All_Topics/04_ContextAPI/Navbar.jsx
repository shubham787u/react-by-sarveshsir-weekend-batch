import React, { useContext } from "react";
import { storeRoom } from "./UserContext";

const Navbar = () => {
    
  //!step3 : Consume a context
  let x = useContext(storeRoom);
//   console.log(x);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Logo</h1>
      <h1>Navbar page </h1>
      <h3>Welcome {x}</h3>
    </div>
  );
};

export default Navbar;
