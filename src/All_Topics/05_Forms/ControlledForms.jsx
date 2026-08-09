import { useState } from "react";

const ControlledForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //stop page refresh

    let user = { email, password };
    console.log(user);

    //clearing input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Learn Forms in react </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ControlledForms;
