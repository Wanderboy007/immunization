import "./App.css";
import { Routes, Route } from "react-router-dom";


import Login from '../src/pages/test file/login/Tabbed/Loggin.jsx';
import Register from './pages/Login/register/Register';
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytic from "./pages/Analytics/Analytic";
import DetailsPage from "./pages/Detail/Details";
import GrowthDetailsPage from "../src/pages/GrowthDetailsPage/GrowthDetailsPage.jsx";
import MotherDetail from "./pages/motherDetails/Motherdetail";
import SummaryPage from "./pages/summery/SummaryPage.js";
// import Test from "./pages/test file/Herotest";
import Home from "./pages/Home/Home.jsx";
import Addchild from "./pages/AddChild/Addchild.jsx";
import PersonalDetail from "./pages/PersonalDetail/PersonalDetail.jsx";
import Herotest from "./pages/test file/Herotest";
import OneMonth from "./pages/GrowthDetailsPage/ONEMONTH.jsx";
import BIRTH from "./pages/GrowthDetailsPage/BIRTH.jsx";
import TWOMONTHS from "./pages/GrowthDetailsPage/TWOMONTHS.jsx";
import THREEMONTHS from "./pages/GrowthDetailsPage/THREEMONTHS.jsx";
import NINEMONTHS from "./pages/GrowthDetailsPage/NINEMONTHS.jsx";
import SIXTEENMONTHS from "./pages/GrowthDetailsPage/SIXTEENMONTHS.jsx";
import VITAMINA from "./pages/GrowthDetailsPage/VITAMINA.jsx";
import SIXYEARS from "./pages/GrowthDetailsPage/SIXYEARS.jsx";


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="register" element={<Register />} />
      <Route path="analytic" element={<Analytic />} />
      <Route path="addchild/:adhar" element={<Addchild />} />
      <Route path="details/:adhar" element={<DetailsPage />} />
      <Route path="OneMonth/:childdata" element={<OneMonth />} />
      <Route path="BIRTH/:childdata" element={<BIRTH />} />
      <Route path="TWOMONTHS/:childdata" element={<TWOMONTHS />} />
      <Route path="THREEMONTHS/:childdata" element={<THREEMONTHS />} />
      <Route path="NINEMONTHS/:childdata" element={<NINEMONTHS />} />
      <Route path="SIXTEENMONTHS/:childdata" element={<SIXTEENMONTHS />} />
      <Route path="VITAMINA/:childdata" element={<VITAMINA />} />
      <Route path="SIXYEARS/:childdata" element={<SIXYEARS />} />
      <Route path="Motherdetail/:id?" element={<MotherDetail />} />
      <Route path="summary/:childdata" element={<SummaryPage />} />
      <Route path="gdp" element={<GrowthDetailsPage />} />
      <Route path="personal" element={<PersonalDetail />} />
      <Route path="test" element={<Herotest />} />
      {/* <Route path="test2" element={<Test2 />} /> */}
    </Routes >
  </>)
}

export default App;
