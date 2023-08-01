import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../FireBase-Config/FireBase.js";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      signInWithEmailAndPassword(auth, details.email, details.password)
        .then((users) => {
          alert("User login successfully");
          navigate("/");
        })
        .catch((err) => alert(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_page">
      <h1>LogIn Page</h1>
      <Form
        onSubmit={handleSubmit}
        className="p-5"
        style={{
          maxHeight: "80vh",
          overflowY: "scroll",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 var(--col1)",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
              color: "var(--col2)",
            }}
            type="email"
            placeholder="Enter email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
              color: "var(--col2)",
            }}
            type="password"
            placeholder="Password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </Form.Group>
        <p>
          To create a new account go to: <Link to="/signup">SignUp Page</Link>
        </p>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
