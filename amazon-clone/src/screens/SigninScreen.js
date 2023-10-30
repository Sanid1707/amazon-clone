import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In | Amazon</title>
      </Helmet>
      <h1 classname="mb-3">Sign In</h1>
      <Form>
        <Form.Group classname="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group classname="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </div>
        {/* this is the link to the signup page */}
        <div className="mb-3">
          <Button type="submit">
            New Customer?{""}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
