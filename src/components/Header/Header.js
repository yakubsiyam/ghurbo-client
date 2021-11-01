import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand text-color fw-bold" to="/home">
            <img className="img-fluid me-2 pb-1" src={logo} alt="Logo here" />
            ghurbo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/destinations">
                  Destination
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {user?.email && (
                <li className="nav-item my-auto">
                  <Link className="nav-link" to="/mycart">
                    My Cart
                  </Link>
                </li>
              )}

              {user?.email && (
                <li className="nav-item my-auto">
                  <Link className="nav-link" to="/manageorders">
                    Manage Orders
                  </Link>
                </li>
              )}

              {user?.email && (
                <li className="nav-item my-auto">
                  <Link className="nav-link" to="/addnewdestination">
                    Add New Destination
                  </Link>
                </li>
              )}

              <li className="nav-item my-auto">
                <span className="nav-link">
                  {user?.email && (
                    <p className="pt-md-3 text-dark">Hi, {user?.displayName}</p>
                  )}
                </span>
              </li>

              {user?.email ? (
                <li className="nav-item my-auto" onClick={logOut}>
                  <Link className="nav-link" to="/home">
                    <span className="btn btn-color">
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item my-auto">
                  <Link className="nav-link my-auto" to="/login">
                    <span className="btn btn-color">
                      Login <i className="fas fa-sign-in-alt"></i>
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
