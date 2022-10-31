import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";
import "./utilities/CustomClass.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Register />
    </div>
  );
}

export default App;
