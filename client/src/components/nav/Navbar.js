import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import UserContext from "../../utils/UserContext";
import { logout } from "../../utils/logout";

export default function Navbar() {
  let history = useHistory();


  const { user, setUser } = useContext(UserContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    const logOut = await logout();
    setUser(null);
    history.push("/");
  };

  return (
    <header className="navbar p-2">
      <section className="navbar-section text-bold">
      <Link href="/" className="navbar-brand mr-2"><img src="./cycle.png" alt="cycle logo" height="30" width="40"/></Link>
        <Link to="/" className="btn btn-link nav-link">
          Home
        </Link>
        {user  ? <Link to="/map" className="btn btn-link nav-link">
          Map
        </Link> : null}
        { user && user.isAdmin ?
        <Link to="/admin" className="btn btn-link nav-link">
          Admin
        </Link> : null}
      </section>
      <section className="navbar-center"></section>
      {!user ? (
        <section className="navbar-section">
          {" "}
          <Link
            to="/signup"
            className="btn btn-primary"
            style={{ marginRight: "8px" }}
          >
            Sign Up
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>{" "}
        </section>
      ) : (
        <section className="navbar-section">
          {" "}
          <Link to="/logout" className="btn" onClick={handleLogout}>
            Logout
          </Link>
        </section>
      )}
    </header>
  );
}
