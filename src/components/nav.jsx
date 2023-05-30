import React from "react";
import Logo from "../assets/Qito_Tech_Logo.png";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-white py-0">
        <div class="container">
          <a className="navbar-brand fw-semibold" href="/">
            <img
              src={Logo}
              alt="Qito_tech_logo"
              width="40"
              height="40"
              className="me-1"
            />
            Qito Tech
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  class="nav-link fw-medium active py-0"
                  aria-current="page"
                  to="/"
                >
                  DNSTT Accounts
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link py-0" to="/outline_accounts">
                  Outline Accounts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
