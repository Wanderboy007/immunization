// Inside a component

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  logout,
  selectIsLoggedIn,
} from "../../reduxxx/featurs/counter/loginslice";
import { useNavigate } from "react-router-dom";

function Test() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigator = useNavigate();

  const handleLogin = () => {
    // Simulate a successful login
    // const user = { username: "exampleUser" };
    dispatch(loginSuccess());
    navigator("/test2");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome,!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Test;
