import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-Us"
                className="nav-link"
                activeClassName="active-link"
              >
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-Us"
                className="nav-link"
                activeClassName="active-link"
              >
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                className="nav-link"
                activeClassName="active-link"
              >
                LogIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
                activeClassName="active-link"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/add-to-card"
                className="nav-link"
                activeClassName="active-link"
              >
                Add To Card
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  to="/counter"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Counter
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
