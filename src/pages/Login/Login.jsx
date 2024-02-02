import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Login/Login.css";
// import { useDispatch } from "react-redux";
// import { SetInitialPractitionerUIDState } from "../../reduxxx/featurs/PractitionerUIDSlice/PractitionerUID";

// export default function Example() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const values = {
//     email,
//     password,
//   };

//   // axios.defaults.withCredentials = true;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(SetInitialPractitionerUIDState({ PractitionerUID: "PID001" }));
//     navigate("/dashboard");
// axios
//   .post("http://localhost:5000/api/login", values)
//   .then((res) => {
//     if (res.data.status === "Success") {
//       // navigate("/dashboard");
//       alert("Done");
//     } else {
//       alert("error");
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//};

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img className="mx-auto h-10 w-auto" src="" alt="Immunize me logo" />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={handleSubmit}
//                 // onClick={handleSubmit}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not Register Yet?{" "}
//             <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Register Now
//             </button>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

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

  async function getdata() {}

  useEffect(() => {
    getdata();

    console.log("working");
  }, []);

  return (
    <>
      <div className="Login_cont">
        <form onSubmit={handlesubmit} className="Login_box">
          <h1 className="header">LOGIN AS MO</h1>
          <div>
            <Link to="/login">
              <button className="option-login">MO</button>
            </Link>
            <Link to="/loginpractitioner">
              <button className="option-login">PRACTITIONER</button>
            </Link>
            <Link to="/loginparent">
              <button className="option-login">PARENT</button>
            </Link>
          </div>
          <div className="container-box">
            <div className="Login_input_cont">
              <label className="Login_lable" htmlFor="name">
                Username:
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input_field"
              />
            </div>
            <div className="Login_input_cont">
              <label className="Login_lable" htmlFor="password">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input_field"
              />
            </div>
            <div>
              <a href="/app">forgot password</a>
            </div>
            <button className="Login_button" type="submit">
              Sign in
            </button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}
