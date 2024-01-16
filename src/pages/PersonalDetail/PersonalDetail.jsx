import React from "react";
import Sidebar from "../Navbar/Sidebar";
import { useFormik } from "formik";
import "./PersonalDetail.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      console.log("fromik", formik.values);
      async function sendData() {
        const a = await axios.post(
          "http://localhost:5000/api/addchild",
          formik.values
        );

        console.log(a);
      }
      sendData();
      // navigate("/gdp");
    },
  });
  return (
    <>
      <div className="details-page">
        {/* Render the Sidebar component */}
        <Sidebar MotherName="hi" />
        <div className="content">
          <h1>Personal Details</h1>
          <section>
            <form
              className="flex flex-col items-baseline gap-10"
              onSubmit={formik.handleSubmit}
            >
              <div className="input-cont">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Middlename">Middle Name</label>
                  <input
                    type="text"
                    id="Middlename"
                    name="Middlename"
                    onChange={formik.handleChange}
                    value={formik.values.Middlename}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Lastname">Last Name</label>
                  <input
                    type="text"
                    id="Lastname"
                    name="Lastname"
                    onChange={formik.handleChange}
                    value={formik.values.Lastname}
                  />
                </div>
              </div>

              <div className="input-cont">
                <div>
                  <label htmlFor="MotherAdher">MotherAdher</label>
                  <input
                    type="text"
                    id="MotherAdher"
                    name="MotherAdher"
                    onChange={formik.handleChange}
                    value={formik.values.MotherAdher}
                  />
                </div>

                <div>
                  <label htmlFor="DateOfBirth">Date Of Birth</label>
                  <input
                    type="date"
                    id="DateOfBirth"
                    name="DateOfBirth"
                    onChange={formik.handleChange}
                    value={formik.values.DateOfBirth}
                  />
                </div>

                <div>
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
              </div>

              <div className="flex gap-5 items-center">
                <div>
                  <label htmlFor="PlaceOfBirth">PlaceOfBirth</label>
                  <input
                    type="text"
                    id="PlaceOfBirth"
                    name="PlaceOfBirth"
                    onChange={formik.handleChange}
                    value={formik.values.PlaceOfBirth}
                  />
                </div>

                <div>
                  <label htmlFor="ClinicalDelivery">Clinical Delivery</label>
                  <input
                    type="checkbox"
                    id="ClinicalDelivery"
                    name="ClinicalDelivery"
                    onChange={formik.handleChange}
                    value={formik.values.ClinicalDelivery}
                  />
                </div>
              </div>

              <div className="input-cont">
                <div>
                  <label htmlFor="PerTerm">PerTerm</label>
                  <input
                    type="checkbox"
                    id="PerTerm"
                    name="PerTerm"
                    onChange={formik.handleChange}
                    value={formik.values.PerTerm}
                  />
                </div>

                <div>
                  <label htmlFor="HomeDelivery">Home Delivery</label>
                  <input
                    type="checkbox"
                    id="HomeDelivery"
                    name="HomeDelivery"
                    onChange={formik.handleChange}
                    value={formik.values.HomeDelivery}
                  />
                </div>

                <div>
                  <label htmlFor="CSection">C Section</label>
                  <input
                    type="checkbox"
                    id="CSection"
                    name="CSection"
                    onChange={formik.handleChange}
                    value={formik.values.CSection}
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 w-1/2"
              >
                Next
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default PersonalDetail;
