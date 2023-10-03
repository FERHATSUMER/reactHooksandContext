import "./App.css";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Member from "./pages/member";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/member" element={<Member />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
