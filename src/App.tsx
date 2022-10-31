import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/login-register/Login";
import "./utilities/CustomClass.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
