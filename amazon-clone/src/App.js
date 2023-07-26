import "./App.css";
import React from "react";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      {/* using bem convention , which is a reall7y good way to name your css */}

      <Header />
      {/* {header} */}
      {/* {home} */}
    </div>
  );
}

export default App;
