import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-4"
      style={{
        backgroundColor: "#FFF3E0",
        boxShadow: "none",
        border: "none",
      }}
    >
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="me-2" style={{ fontSize: "2.8rem" }}>
            Plate
          </span>
          <span
            className="fs-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#5D4037",
            }}
          >
            Undine
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center text-center text-lg-start">
            <li className="nav-item mx-2">
              <Link className="nav-link px-4 py-2 rounded-pill" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link px-4 py-2 rounded-pill" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link px-4 py-2 rounded-pill" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link px-4 py-2 rounded-pill" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link px-4 py-2 rounded-pill" to="/order">
                Cart
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link px-4 py-2 rounded-pill"
                to="/reservation"
              >
                Reservation
              </Link>
            </li>
            <li className="nav-item mt-3 mt-lg-0 ms-lg-4">
              <Link
                className="btn rounded-pill px-5 py-3 fw-semibold shadow-sm"
                to="/locations"
                style={{
                  background: "linear-gradient(45deg, #FF3D00, #FF1744)",
                  color: "white",
                  fontSize: "1.05rem",
                }}
              >
                See Locations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
