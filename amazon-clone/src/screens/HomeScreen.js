import { Link } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger"; // this is a middleware for reducer function
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Products";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>amazona</title>
      </Helmet>
      <h1>Featured products</h1>

      <div className="products">
        {
          // gonna be using conditional rendering
          loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )
        }
      </div>
    </div>
  );
}

export default HomeScreen;
