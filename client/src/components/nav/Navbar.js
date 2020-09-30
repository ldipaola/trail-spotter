import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        <Link to="/blog" className="btn btn-link">
          Blog
        </Link>
        <Link to="/login" className="btn btn-link">
          Login
        </Link>
      </section>
      <section className="navbar-center"></section>
      <section className="navbar-section">
        <Link to="/signup" className="btn btn-link">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-link">
          Login
        </Link>
      </section>
    </header>
  );
}
