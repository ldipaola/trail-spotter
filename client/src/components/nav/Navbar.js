import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar p-2">
      <section className="navbar-section text-bold">
        <Link to="/" className="btn btn-link nav-link">
          Home
        </Link>
        <Link to="/map" className="btn btn-link nav-link">
          Map
        </Link>
        <Link to="/blog" className="btn btn-link nav-link">
          Blog
        </Link>
        <Link to="/about" className="btn btn-link nav-link">
          About
        </Link>
      </section>
      <section className="navbar-center"></section>
      <section className="navbar-section">
        <Link to="/signup" className="btn btn-primary" style={{marginRight: "8px"}}>
          Sign Up
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
      </section>
    </header>
  );
}
