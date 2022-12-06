
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
