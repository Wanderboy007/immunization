import "./App.css";
import { Routes, Route } from "react-router-dom";


import Login from './pages/Login/Login';
import Register from './pages/Login/register/Register';
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytic from "./pages/Analytics/Analytic";
import DetailsPage from "./pages/Detail/Details";
import GrowthDetailsPage from "./pages/GrowthDetailsPage/GrowthDetailsPage";
import MotherDetail from "./pages/motherDetails/Motherdetail";
import SummaryPage from "./pages/summary/SummaryPage.js";
// import Test from "./pages/test file/Herotest";
import Home from "./pages/Home/Home.jsx";
import Addchild from "./pages/AddChild/Addchild.jsx";
import PersonalDetail from "./pages/PersonalDetail/PersonalDetail.jsx";
import Herotest from "./pages/test file/Herotest";


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
      <Route path="Motherdetail/:id?" element={<MotherDetail />} />
      <Route path="summary" element={<SummaryPage />} />
      <Route path="gdp" element={<GrowthDetailsPage />} />
      <Route path="personal" element={<PersonalDetail />} />
      <Route path="test" element={<Herotest />} />
      {/* <Route path="test2" element={<Test2 />} /> */}
    </Routes >
  </>)
}

export default App;
