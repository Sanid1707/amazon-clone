import "./App.css";
import React from "react";
import Header from "./Header";

import data from "./data";

function App() {
  return (
    <div className="app">
      {/* using bem convention , which is a reall7y good way to name your css */}

      <Header />

      <main>
        <h1>Featured products</h1>

        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={"/product/${product.slug}"}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                {/* wrinting  a jsx inside the brackets  */}
                <a href={"/product/${product.slug}"}>
                  <p>{product.name}</p>
                </a>

                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
