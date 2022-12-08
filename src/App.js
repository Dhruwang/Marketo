
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Numbers from './components/Numbers';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Numbers />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
