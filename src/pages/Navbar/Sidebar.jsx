import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  SetInitialState,
  Clear,
} from "../../reduxxx/featurs/MotherDataSlice/MotherDataSlice";

function Sidebar() {
  const MotherData = useSelector((state) => state.MotherData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(Clear());
    navigate("/dashboard");
  }

  return (
    <div className="sidebar">
      <div className="sidebar-heading-cont">
        <div className="sidebar-heading">
          Mothername:-
          <br />
          {MotherData.motherName ? MotherData.motherName : "Mother Name"}
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
