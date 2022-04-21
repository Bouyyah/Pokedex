import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pokelist from "./components/Pokelist";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      

      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/pokelist" element={<Pokelist />} />
          <Route exact path="/pokedetails" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
