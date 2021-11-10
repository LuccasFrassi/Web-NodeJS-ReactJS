import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navbar';
import Interface from './components/Interface';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Interface />

      </BrowserRouter>
    </div>
  );
}

export default App;