import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <>
     <div className="wapper">
        <form action='' className='form-element'>
            <div className="log-action text-center">LOGIN</div>
            <div className="input-box">
            <MdOutlineEmail className='icon' />  <input className='input-type' type="email" placeholder='Email' required />
            </div>
            <div className="input-box">
            <RiLockPasswordLine  className='icon'/> <input className='input-type' type="password" placeholder='Password' required />
            </div>
            <div className="remember">
                <label><input type="checkbox"/> Remember me </label>
            </div>

            <button className='login-btn' type="sumbit">LOGIN</button>

            <div className="text-center pb-4">Or Login with</div>
            <div className="d-flex justify-content-between">
                        <NavLink to="/" className="btn social-btn d-flex align-items-center gap-2"><FaFacebook /> Facebook</NavLink>
                        <NavLink to="/" className="btn social-btn d-flex  align-items-center gap-2"><FaGoogle /> Google</NavLink>
            </div>

            <div className="register d-flex justify-content-center gap-2 mt-5"><p>Not a member? </p> <NavLink to="/signup" className="text-dark">SignUp Now</NavLink></div>

        </form>
     </div>
    </>
  )
}

export default Login
