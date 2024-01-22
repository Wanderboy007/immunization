import React from "react";
import Navbar from "../Navbar/Navbar";
import "./analytic.css";

const Analytic = () => {
  return (
    <>
      <div className="vaccine">
        <Navbar />
        <div className="top-4">
          <div className="registration-block">
            <h6>Registration</h6>
          </div>
          <div className="sex-block">
            <h6>Sex</h6>
          </div>
          <div className="age-block">
            <h6>Age</h6>
          </div>
          <div className="wght-block">
            <h6>weight and height</h6>
          </div>
        </div>

        <div className="bottom-2">
          <div className="vaccine-block">
            <h6>Vaccine</h6>
          </div>
          <div className="immunized-block">
            <h6>Immunization</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytic;
