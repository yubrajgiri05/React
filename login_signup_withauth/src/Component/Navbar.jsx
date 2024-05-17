import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-red navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
         <ul className="d-flex gap-4">
            <li>
                <Link to="/registration">Registation</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
         </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
