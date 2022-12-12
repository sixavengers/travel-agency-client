import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import PackegeDetails from "./components/Home/details/PackegeDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import AllPackages from "./pages/Dashboard/AllPackages/AllPackages";

import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Overview from "./pages/Dashboard/Overview/Overview";
import AddPackage from "./pages/Dashboard/Packages/AddPackage/AddPackage";
import PackageList from "./pages/Dashboard/Packages/PackageList/PackageList";
import Profile from "./pages/Dashboard/Profile/Profile";
import Settings from "./pages/Dashboard/Settings/Settings";
import Users from "./pages/Dashboard/Users/Users";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";
import Packages from "./pages/packeges/Packages";
import Payment from "./pages/payment/Payment";

import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useAppDispatch } from "./app/hooks";
import ProtectRoute from "./AuthRoute/ProtectRoute";
import RequireAuth from "./AuthRoute/RequireAuth";
import { login } from "./features/auth/AuthSlice";
import "./utilities/CustomClass.css";
const cookies = new Cookies();
const user = cookies.get("travel");
function App() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      dispatch(login({ user: user?.user, token: user?.token }));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {pathname !== "/login" &&
        pathname !== "/register" &&
        !pathname?.includes("dashboard") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <Login />
            </ProtectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectRoute>
              <Register />
            </ProtectRoute>
          }
        />
        <Route path="/packages" element={<Packages />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details" element={<PackegeDetails />} />

        {/* dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="" index element={<Overview />} />
          {/* packages */}
          <Route path="package/add" element={<AddPackage />} />
          <Route path="package/list" element={<PackageList />} />

          {/* users */}
          <Route path="users" element={<Users />} />

          {/* all package */}
          <Route path="admin/packages" element={<AllPackages />} />

          {/* profile */}
          <Route path="profile" element={<Profile />} />

          {/* settings */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!pathname.includes("dashboard") && <Footer />}
    </div>
  );
}

export default App;
