import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <ItemListContainer/>
    </div>
  );
}

export default App;
