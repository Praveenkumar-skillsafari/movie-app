import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../FireBase-Config/FireBase.js";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [formFields, setFormField] = useState({
    userName: "",
    email: "",
    password: "",
    number: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const userDb = async (user) => {
    try {
      console.log("userDb Function Called");
      const docRef = await addDoc(collection(db, "users"), {
        id: user.uid,
        email: formFields.email,
        userName: formFields.userName,
        phoneNumber: formFields.phoneNumber,
        password: formFields.password,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("User Successfully Created");
      navigate("/");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const handleSubmit = (e) => {
    console.log("OnsubmitFunction Called");
    e.preventDefault();

    if (formFields.userName == "") {
      window.alert("User name  is empty");
    } else if (formFields.email == "") {
      window.alert("Email  is empty");
    } else if (formFields.password == "") {
      window.alert("Password   is invalid");
    } else if (formFields.number == "") {
      window.alert("Phone Number is invalid");
    } else if (formFields.city == "") {
      window.alert("Enter your city ");
    } else if (formFields.state == "") {
      window.alert("select any state");
    } else {
      createUserWithEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      )
        .then((userCredential) => {
          const user = (userCredential.user, file);
          userDb(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="singUp_page" style={{ minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          color: "var(--col1)",
        }}
      >
        SignUp Page
      </h1>
      <Form
        onSubmit={handleSubmit}
        className="p-5"
        style={{
          maxHeight: "80vh",
          overflowY: "scroll",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 var(--col1)",
          width: "400px",
        }}
      >
        <Form.Group controlId="formFile" className="mb-5">
          <Form.Control
            type="file"
            name="img"
            placeholder="none"
            onChange={handleFileChange}
            style={{
              borderRadius: "50%",
              height: "100px",
              width: "100px",
              margin: "0 auto",
              outline: "none",
              border: "1px solid var(--col1)",
            }}
          />
          <Form.Label className="my-auto" style={{ color: "var(--col1)" }}>
            Upload Your Image
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ color: "var(--col1)" }}>User Name</Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="userName"
            value={formFields.userName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "var(--col1)" }}>
            Email address
          </Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "var(--col1)" }}>Password</Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label style={{ color: "var(--col1)" }}>
            Mobile Number
          </Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            type="number"
            name="number"
            value={formFields.number}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label style={{ color: "var(--col1)" }}>City</Form.Label>
          <Form.Control
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            type="text"
            name="city"
            value={formFields.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label style={{ color: "var(--col1)" }}>State</Form.Label>
          <Form.Select
            style={{
              outline: "none",
              border: "1px solid var(--col1)",
              background: "transparent",
            }}
            defaultValue="Choose..."
            name="state"
            value={formFields.state}
            onChange={handleChange}
          >
            <option style={{ color: "black" }}>Choose...</option>
            <option style={{ color: "black" }} value="AP">
              Andhra Pradesh
            </option>
            <option style={{ color: "black" }} value="KA">
              Karnataka
            </option>
            <option style={{ color: "black" }} value="TN">
              Tamil Nadu
            </option>
            <option style={{ color: "black" }} value="Kerala">
              Kerala
            </option>
            <option style={{ color: "black" }} value="MH">
              Maharashtra
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          style={{ textAlign: "center", margin: "40px auto" }}
          className="mb-3 mx-auto"
          controlId="formBasicButton"
        >
          <Button
            className="mx-auto"
            style={{ textAlign: "center", margin: "0 auto" }}
            variant="primary"
            type="submit"
          >
            SignUp
          </Button>
        </Form.Group>

        <Form.Group className="mt-2">
          <p>
            Already you have an Account <br />
            <Link to="/login">LogIn Page</Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignUp;
