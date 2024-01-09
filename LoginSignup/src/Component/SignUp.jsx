import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
    <div className="wapper signup-wapper">
        <form action='' className='form-element'>
            <div className="log-action text-center">Create Account</div>
            <div className="input-box">
             <input className='input-type input-type-signup' type="name" placeholder='Your Name' required />
            </div>
            <div className="input-box">
           <input className='input-type input-type-signup' type="email" placeholder='Your Emain' required />
            </div>
            <div className="input-box">
             <input className='input-type input-type-signup ' type="password" placeholder='Password' required />
            </div>
            <div className="input-box">
           <input className='input-type input-type-signup' type="password" placeholder='Repeat Your Password' required />
            </div>
            <div className="remember">
                <label><input type="checkbox"/> I agree all terms of service </label>
            </div>

            <button className='login-btn signup-btn' type="sumbit">SIGNUP</button>

            <div className="register d-flex justify-content-center gap-2 mt-2"><p>Already have account </p> <NavLink to="/login" className="text-dark">Login Here</NavLink></div>

        </form>
     </div>
    </>
  )
}

export default SignUp
