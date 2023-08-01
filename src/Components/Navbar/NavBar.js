import React from "react";
import logo from "../../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserDetails from "../UserDetails";

const NavBar = () => {
  return (
    <div
      className="nav-container"
      style={{
        backgroundColor: "var(--col1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <div className="logo" style={{ height: "100%", width: "6%" }}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "100%", width: "100%" }}
          />
        </Link>
      </div>
      <div className="search-area">
        <h1 style={{ fontFamily: "cursive", color: "white" }}>
          Enjoy Your Movie
        </h1>
      </div>
      <div className="userArea" style={{ marginRight: "3%" }}>
        <UserDetails />
      </div>
    </div>
  );
};

export default NavBar;
