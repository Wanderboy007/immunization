import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginF.css";
import Tabs from "./components/Tabs.jsx";
import { useDispatch } from "react-redux";
import { SetInitialPractitionerUIDState } from "../../../../reduxxx/featurs/PractitionerUIDSlice/PractitionerUID.js";

export default function Loggin() {
  const [PractitionerName, setPractitionerName] = useState("");
  const [PractitionerPassword, setPractitionerPassword] = useState("");
  const [MOName, setMOName] = useState("");
  const [MOPassword, setMOPassword] = useState("");
  const [ParentName, setParentName] = useState("");
  const [ParentPassword, setParentPassword] = useState("01");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function MOhandlesubmit(e) {
    e.preventDefault();
    // console.log(PractitionerName + " " + PractitionerPassword);
  }
  async function Practitionerhandlesubmit(e) {
    e.preventDefault();
    console.log(PractitionerName);
    const check = await axios.post(
      "http://localhost:5000/practitionerUser/login",
      {
        UID: PractitionerName,
        Password: PractitionerPassword,
      }
    );

    if (check.data) {
      navigate("/dashboard");
      dispatch(
        SetInitialPractitionerUIDState({ PractitionerUID: PractitionerName })
      );
      console.log(check.data);
    } else {
      navigate("/login");
      console.log(check);
    }
  }

  async function handlesubmit(e) {
    e.preventDefault();
    navigate(`/summary/${ParentName + ParentPassword}`);
    console.log(ParentName + " " + ParentPassword);
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
              <form onSubmit={MOhandlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      MO Username
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={PractitionerName}
                      onChange={(e) => setPractitionerName(e.target.value)}
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
                      value={PractitionerPassword}
                      onChange={(e) => setPractitionerPassword(e.target.value)}
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
                </div>
              </form>
            </div>

            <div label="Practitioner">
              <form onSubmit={Practitionerhandlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      Practitioner Username
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={PractitionerName}
                      onChange={(e) => setPractitionerName(e.target.value)}
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
                      value={PractitionerPassword}
                      onChange={(e) => setPractitionerPassword(e.target.value)}
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
                </div>{" "}
              </form>
            </div>

            <div label="Parent">
              <form onSubmit={handlesubmit}>
                <div className="Login_input_box">
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="name">
                      Adhar
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={ParentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="Login_input"
                    />
                  </div>
                  <div className="Login_input_cont">
                    <label className="Login_lable" htmlFor="password">
                      Child Adhar
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={ParentPassword}
                      onChange={(e) => setParentPassword(e.target.value)}
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
                </div>
              </form>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
