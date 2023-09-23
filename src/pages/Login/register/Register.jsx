import React from "react";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnf_password, setCnf_password] = useState("");
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    // console.log(name + middlename + lastname + uid + phone + email + password);

    axios
      .post("http://localhost:5000/api/reguser", {
        name,
        middlename,
        lastname,
        phone,
        email,
        password,
      })
      .then(function (response) {
        // handle success

        if (response.status === 200) {
          console.log(response);
          navigate("/login");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <>
      <div className="Register_cont">
        <form onSubmit={handlesubmit} className="Register_box">
          <h1 className="App">Register</h1>
          <div className="Register_input_cont">
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="Register_input"
              />
            </div>
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="middlename">
                Middle name
              </label>
              <input
                type="text"
                Middle
                name="middlename"
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
                className="Register_input"
              />
            </div>
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="lastname">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="Register_input"
              />
            </div>
          </div>
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="Register_input_cont">
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="phone">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="Register_input"
              />
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <div className="Register_input_cont">
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                email="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="Register_input"
              />
            </div>
          </div>
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="Register_input_cont">
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="password">
                password
              </label>
              <input
                type="password"
                password="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="Register_input"
              />
            </div>
            <div className="Register_individual_cont">
              <label className="Register_lable" htmlFor="cnf_password">
                confirm_password
              </label>
              <input
                type="password"
                name="cnf_password"
                value={cnf_password}
                onChange={(e) => setCnf_password(e.target.value)}
                className="Register_input"
              />
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <div>
            <a href="/app">forgot password</a>
          </div>
          <button className="Register_button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
