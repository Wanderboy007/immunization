import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    console.log(name + " " + password);

    axios
      .post("http://localhost:5000/cu", { name, password })
      .then(function (response) {
        // handle success
        console.log(response.data[0]);
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
  });

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
          <Link to="/blogs">Home</Link>
        </form>
      </div>
    </>
  );
}
