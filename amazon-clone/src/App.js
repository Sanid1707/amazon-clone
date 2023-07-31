import "./App.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container"></div>
      <div className="app">
        {/* using bem convention , which is a reall7y good way to name your css */}

        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved.</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
