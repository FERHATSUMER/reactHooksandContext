import "./App.css";
import Navbar from "./components/navbar";
import Blog from "./pages/blog";
import Member from "./pages/member";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/project";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
