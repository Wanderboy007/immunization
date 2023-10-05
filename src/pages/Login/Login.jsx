import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/check", { name, password })
      .then(function (response) {
        // handle success

        if (response.data[0][0].name) {
          navigate("/test");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  async function getdata() {
    // console.log(raw_axious);
    // const raw_data = await fetch("http://localhost:5000/api/getuser");
    // const data = await raw_data.json();
    // const user = data[0];
    // console.log(user[0]);
  }

  useEffect(() => {
    getdata();

    console.log("working");
  }, []);

  return (
    <>
      <div className="Login_cont">
        <form onSubmit={handlesubmit} className="Login_box">
          <h1 className="App">Login</h1>
          <div className="Login_input_cont">
            <label className="Login_lable" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="Login_input"
            />
          </div>
          <div className="Login_input_cont">
            <label className="Login_lable" htmlFor="password">
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Login_input"
            />
          </div>
          <div>
            <a href="/app">forgot password</a>
          </div>
          <button className="Login_button" type="submit">
            Sign in
          </button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </>
  );
}
