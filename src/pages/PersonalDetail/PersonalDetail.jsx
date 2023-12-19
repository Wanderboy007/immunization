import React from "react";
import Sidebar from "../Navbar/Sidebar";
import { useFormik } from "formik";
import "./PersonalDetail.css";
import { useNavigate } from "react-router-dom";

const PersonalDetail = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      Middlename: "",
      Lastname: "",
      MotherAdher: "",
      DateOfBirth: "",
      BirthWeight: "",
      PlaceOfBirth: "",
      ClinicalDelivery: false,
      PerTerm: false,
      HomeDelivery: false,
      CSection: false,
    },
    onSubmit: (values) => {
      navigate("/gdp");
    },
  });
  // console.log("fromik", formik.values);
  return (
    <>
      <div className="details-page">
        {/* Render the Sidebar component */}
        <Sidebar MotherName="hi" />
        <div className="content">
          <h1>Personal Details</h1>
          <section>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-cont">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                <label htmlFor="Middlename">Middle Name</label>
                <input
                  type="text"
                  id="Middlename"
                  name="Middlename"
                  onChange={formik.handleChange}
                  value={formik.values.Middlename}
                />

                <label htmlFor="Lastname">Last Name</label>
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  onChange={formik.handleChange}
                  value={formik.values.Lastname}
                />
              </div>

              <div className="input-cont">
                <label htmlFor="MotherAdher">MotherAdher</label>
                <input
                  type="text"
                  id="MotherAdher"
                  name="MotherAdher"
                  onChange={formik.handleChange}
                  value={formik.values.MotherAdher}
                />

                <label htmlFor="DateOfBirth">Date Of Birth</label>
                <input
                  type="date"
                  id="DateOfBirth"
                  name="DateOfBirth"
                  onChange={formik.handleChange}
                  value={formik.values.DateOfBirth}
                />

                <label htmlFor="BirthWeight">BirthWeight</label>
                <input
                  type="number"
                  id="BirthWeight"
                  name="BirthWeight"
                  placeholder="ex-2kg"
                  onChange={formik.handleChange}
                  value={formik.values.BirthWeight}
                />
              </div>

              <div className="flex m-2 p-2 gap-5 items-center">
                <label htmlFor="PlaceOfBirth">PlaceOfBirth</label>
                <input
                  type="text"
                  id="PlaceOfBirth"
                  name="PlaceOfBirth"
                  onChange={formik.handleChange}
                  value={formik.values.PlaceOfBirth}
                />

                <label htmlFor="ClinicalDelivery">Clinical Delivery</label>
                <input
                  type="checkbox"
                  id="ClinicalDelivery"
                  name="ClinicalDelivery"
                  onChange={formik.handleChange}
                  value={formik.values.ClinicalDelivery}
                />
              </div>

              <div className="input-cont">
                <label htmlFor="PerTerm">PerTerm</label>
                <input
                  type="checkbox"
                  id="PerTerm"
                  name="PerTerm"
                  onChange={formik.handleChange}
                  value={formik.values.PerTerm}
                />

                <label htmlFor="HomeDelivery">Home Delivery</label>
                <input
                  type="checkbox"
                  id="HomeDelivery"
                  name="HomeDelivery"
                  onChange={formik.handleChange}
                  value={formik.values.HomeDelivery}
                />

                <label htmlFor="CSection">C Section</label>
                <input
                  type="checkbox"
                  id="CSection"
                  name="CSection"
                  onChange={formik.handleChange}
                  value={formik.values.CSection}
                />
              </div>
              <button type="submit">Next</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default PersonalDetail;
