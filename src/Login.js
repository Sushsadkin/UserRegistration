import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api_key = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Please enter email");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      fetch("https://lobster-app-ddwng.ondigitalocean.app/user/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          api_key: api_key,
        },
        body: JSON.stringify({
          login_id: email,
          password,
        }),
      })
        .then((res) => res.json())     
        .then((data) => {
          console.log("userRegister", data);
          

          if (data.status === true) {
            console.log(data, "userRegister");

            window.localStorage.setItem(
              "userData",
              JSON.stringify(data.message)
            );

            navigate("/dashboard", { replace: true });
          }
        });
    }
  };

  return (
    <div className="main-container">
      <div className="container1">
        <h2>Login</h2>
        <p>Enter your account login details.</p>
      </div>
      <div className="container2">
        <form className="form-wrapper-login" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-icons">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="User name or Email"
              className="login-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-icons">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="login-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="login-btn">
            Sign in
          </button>
          <br />
          <span className="regfont">
            Don't have an account? please <Link to="/register">Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
