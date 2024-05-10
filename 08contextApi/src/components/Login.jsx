import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(userContext)
  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({userName, password})
  };
  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        name="userName"
        placeholder="Enter your userName"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleSumbit}>Submit</button>
    </div>
  );
}

export default Login;
