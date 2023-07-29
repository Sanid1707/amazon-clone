import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>
        <h1>Featured products</h1>

        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                {/* wrinting  a jsx inside the brackets  */}
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                {/* I used <a href before link but that would eleminate the fact that we are making  a single page   application */}
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default HomeScreen;
