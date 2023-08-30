import React from "react";

const login = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">username </label>
        <input type="text" name="username" className="" />
      </div>
      <div>
        <label htmlFor="password">password </label>
        <input type="password" name="password" className="" />
      </div>
      <div>
        <a href="#">forgot password</a>
      </div>
      <div>
        <input type="button" value="login" />
      </div>
    </>
  );
};

export default login;
