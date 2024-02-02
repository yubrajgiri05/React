import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user, login, logout}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/product"} className="nav-link">
                  PRODUCR
                </Link>
              </li>
              <li className="nav-item">
                  <Link to={"/dasboard"} className="nav-link">
                    Dashboard
                  </Link>
                </li>
                {user ?
                <li className="nav-item" onClick={logout}>
                <button className="btn bg-danger nav-link px-3"> Logout</button>
               </li>
               :
               <li className="nav-item" onClick={login}>
                 <button className="btn bg-success nav-link px-3"> LOGIN</button>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
