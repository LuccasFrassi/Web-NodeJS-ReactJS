import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navbar';
import Calculadora from './components/Interface';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Calculadora />

      </BrowserRouter>
    </div>
  );
}

export default App;