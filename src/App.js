import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import sglogo from './imagenes/sglogo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className='sg-logo' src={sglogo} alt='sg-logo'/>        
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton texto='clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
