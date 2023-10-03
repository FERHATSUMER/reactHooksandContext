import './App.css';
import Navbar from './components/navbar';
import About from './pages/about';
import Member from './pages/member';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Member />
    </div>
  );
}

export default App;
