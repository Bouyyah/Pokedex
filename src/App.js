import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokelist from './components/Pokelist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokelist />
    </div>
  );
}

export default App;
