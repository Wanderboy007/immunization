import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/test">tejas rf</Link>
      <Outlet />
    </div>
  );
};

export default Home;
