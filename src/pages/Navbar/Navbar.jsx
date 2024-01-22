import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link to="/dashboard">Dashbord</Link>
          </li>
          <li className="navbar_li">
            <Link to="/analytic">Analytic</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
