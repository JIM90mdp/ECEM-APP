import './App.css';

import Header from './Components/Header/Header';
import Imagenes from './Components/Imagenes/Imagenes';


// import Button from 'react-bootstrap/Button';
// lo mismo que està arriba se puede hacer como està abajo

function App() {
  return (
    <div className="App">
      <Header/>
      <Imagenes/>
    </div>
  );
}

export default App;
