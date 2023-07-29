import "./App.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* using bem convention , which is a reall7y good way to name your css */}

        <Header />

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
