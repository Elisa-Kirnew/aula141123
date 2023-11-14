import React, { useState } from 'react'
import './App.css';
import CalculadoraDeSoma from './components/soma';
import CalculadoraDeSubtracao from './components/subtracao';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
    <CalculadoraDeSoma/>      


    </div>
  );
}

export default App;
