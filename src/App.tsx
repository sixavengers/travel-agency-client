import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
// import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <header className="App-header">
        <Counter />
        <h2>Welcome to the SIX AVENGERS TRAVEL AGENCY</h2>
      </header> */}
    </div>
  );
}

export default App;
