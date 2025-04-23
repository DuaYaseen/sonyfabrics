// client/src/pages/Login.jsx
import axios from "axios";
import { useState } from "react";
import './login.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("/login", { email, password });
      console.log(res.data); // Handle login success
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
