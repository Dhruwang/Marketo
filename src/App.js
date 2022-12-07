
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Numbers from './components/Numbers';
import About from './components/About';
import Clients from './components/Clients';

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
    </div>
  );
}

export default App;
