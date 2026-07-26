import { useState } from "react";

const StatesInFbc = () => {
  const [state, setState] = useState("Hii");
  //   console.log(state);
  const handlebtn = () => {
    setState("Byee");
  };

  return (
    <div>
      <h1>Learn State - {state}</h1>
      <button onClick={handlebtn}>Click Me </button>
    </div>
  );
};

export default StatesInFbc;
