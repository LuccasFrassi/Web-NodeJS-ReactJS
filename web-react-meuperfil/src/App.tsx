import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Tabela from './components/accordion';
import NavBar from './components/navbar';
import './App.css';
import Foto from './components/fotos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Foto />
        <Tabela />
      </BrowserRouter>
    </div>
  );
}

export default App;