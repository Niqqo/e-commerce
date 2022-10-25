import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
    </div>
  );
}

export default App;
