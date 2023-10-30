import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

import backgroundImage from "../background.jpg"; // Import your background image

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
};

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <div style={backgroundStyle}>
      <Container className="small-container">
        <Helmet>
          <title>Sign In | Amazon</title>
        </Helmet>
        <h1 className="mb-3">Sign In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <div className="mb-3">
            <Button type="submit" variant="primary" block>
              Sign In
            </Button>
          </div>

          {/* Link to the signup page */}
          <div className="mb-3 text-center">
            New Customer?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}
