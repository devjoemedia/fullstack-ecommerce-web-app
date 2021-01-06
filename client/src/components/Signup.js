import React, { useState } from "react";
import "./Signup.css";
// import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const signup = (e) => {
  //   e.preventDefault();
  //   if (username && password && email !== "") {
  //     auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(({ user }) => {
  //         if (user) {
  //           user.updateProfile({
  //             displayName: username,
  //           });

  //           history.push("/");
  //         }
  //       })
  //       .catch(function (error) {
  //         let errorMessage = error.message;
  //         alert(errorMessage);
  //       });
  //   } else {
  //     alert("fill all fields");
  //   }
  // };
  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Register</h1>
        <form>
          <div>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
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
          <div>
            <input type="password" placeholder="Confirm password" />
          </div>
          <button >Signup</button>
          <a href="/">Already have an account Login ?</a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
