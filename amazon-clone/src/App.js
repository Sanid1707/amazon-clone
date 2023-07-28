import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      {/* using bem convention , which is a reall7y good way to name your css */}

      <Header />
      <Home />
    </div>
  );
}

export default App;
