import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import { auth } from "../firebase";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const login = (e) => {
  //   e.preventDefault();
  //   if (email && password !== "") {
  //     auth.signInWithEmailAndPassword(email, password).catch((error) => {
  //       let errorMessage = error.message;
  //       alert(errorMessage);
  //     });
  //     history.push("/");
  //   } else {
  //     console.log("Please fill all fields");
  //   }
  // };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <button >Login</button>
          <a href="/">forget password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
