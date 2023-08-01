import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const [show, setShow] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button
        onClick={handleShow}
        style={{
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "white",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        <i class="fa-solid fa-user"></i>
      </button>
      {show ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Profile</Modal.Header>{" "}
          <Modal.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/signup">Create Account</Link>

            <Link to="/login">login Account</Link>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>xxxxxx model body xxxxx</Modal.Body>
          <Modal.Footer>
            {" "}
            <button onClick="#">Save Changes</button>
            <button onClick="#">Delete Account</button>
            <button onClick={handleClose}>close</button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default UserDetails;
