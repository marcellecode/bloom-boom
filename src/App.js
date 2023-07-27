import logo from './logo.svg';
import './App.css';
import './reset.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
