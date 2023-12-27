import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Test from './component/Test';
import Register from './component/Register';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="test" element={<Test />} />
    </Routes >
  </>)
}

export default App;
