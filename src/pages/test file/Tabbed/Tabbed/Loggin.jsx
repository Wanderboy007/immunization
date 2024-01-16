import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginF.css";
import Tabs from "./components/Tabs.jsx";

export default function Loggin() {
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
        <div className="Login_box">
          <h1 className="App">LOGIN</h1>

          <Tabs>
            <div label="MO">
              <form onSubmit={handlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      MO Username
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
                  <button className="Forgot_button">
                    <a href="/app" style={{ textDecoration: "none" }}>
                      Forgot password
                    </a>
                  </button>
                  <button className="Signin_button" type="submit">
                    Sign in
                  </button>
                  <Link to="/blogs">Home</Link>
                </div>
              </form>
            </div>

            <div label="Practitioner">
              <form onSubmit={handlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      Practitioner Username
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
                  <button className="Forgot_button">
                    <a href="/app" style={{ textDecoration: "none" }}>
                      Forgot password
                    </a>
                  </button>
                  <button className="Signin_button" type="submit">
                    Sign in
                  </button>
                  <Link to="/blogs">Home</Link>
                </div>{" "}
              </form>
            </div>

            <div label="Parent">
              <form onSubmit={handlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      Parent Username
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
                  <button className="Forgot_button">
                    <a href="/app" style={{ textDecoration: "none" }}>
                      Forgot password
                    </a>
                  </button>
                  <button className="Signin_button" type="submit">
                    Sign in
                  </button>
                  <Link to="/blogs">Home</Link>
                </div>
              </form>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
