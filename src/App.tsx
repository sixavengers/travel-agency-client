import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";

import "./utilities/CustomClass.css";
function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/login" &&
        pathname !== "/register" &&
        pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
