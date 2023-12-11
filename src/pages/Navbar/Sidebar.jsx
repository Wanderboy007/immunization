import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/dashboard");
    // Implement your logout logic here
  }

  return (
    <div className="sidebar">
      <div className="sidebar-heading-cont">
        {/* <img src="#" alt="mother pic" /> */}
        <div className="sidebar-heading">
          Mothername:-
          <br />
          {props.MotherName ? props.MotherName : "Mother Name"}
        </div>
      </div>
      <div className="sidebar-buttons">
        <button className="sidebar-button" onClick={handleLogout}>
          Home
        </button>
        <button
          className="sidebar-button "
          onClick={() => navigate("/Motherdetail")}
        >
          Edit Profile
        </button>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
