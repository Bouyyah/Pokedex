import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokelist from "./components/Pokelist";
import Pokedetails from "./components/Pokedetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Pokelist />} />
          <Route exact path="/pokedetails" element={<Pokedetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
