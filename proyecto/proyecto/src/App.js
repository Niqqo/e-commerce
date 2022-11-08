import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/NavBar/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/detalle/:id" element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
