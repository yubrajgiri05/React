import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import Login from './Login'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container position-relative">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" srcset="" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
            </div>
           <div className="d-flex gap-3 position-absolute right-0">
            <NavLink to='login' className='login'>LogIn</NavLink>
            <NavLink to='signup'  className='login'>Get Start</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
             </div>
        </div>
        </nav>

    </>
  )
}

export default Navbar
