import { Link } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger"; // this is a middleware for reducer function

const reducer = (state, action) => {
  // creating a reducer function
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // this is being replaced by reducer function

  const [{ products, loading, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      // setProducts(result.data); // Store the data array from the response
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured products</h1>

      <div className="products">
        {
          // gonna be using conditional rendering
          loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>add to cart</button>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default HomeScreen;
