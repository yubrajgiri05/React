import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Component/login.css"

const Registration = () => {
  const [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  })
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata)
    let isvalid = true;
    let validationErrors={}
    //name validation
    if(formdata.fname === "" || formdata.fname === null){
      isvalid = false;
      validationErrors.fname = "First name is required"
    }
    //lastname validation
    if(formdata.lname === "" || formdata.lname === null){
      isvalid = false;
      validationErrors.lname = "Last name is required"
    }
    //email validation
    if(formdata.email === "" || formdata.email === null){
      isvalid = false;
      validationErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)){
      isvalid = false;
      validationErrors.email = "Email is not valid"
    }
    //password validation
    if(formdata.password === "" || formdata.password === null){
      isvalid = false;
      validationErrors.password = "password is required"
    } else if (formdata.password.length < 6){
      isvalid = false;
      validationErrors.password = "password should be of 6 letter"
    }
    //conform password
    if(formdata.cpassword !== formdata.password){
      isvalid = false;
      validationErrors.cpassword = "password not match "
    } 
    setErrors(validationErrors)
    setValid(isvalid)

    if(Object.keys(validationErrors).length===0){
      axios.post('http://localhost:8000/users',formdata)
      .then(result =>{
        alert("Register Successfully")
        navigate('/login')
      })
      .catch(err => console.log(err))
    }

  }
  return (
    <>
      <section className="form">
        <div className="container">
               
                <form onSubmit={handleSubmit} className="form-class">
                  <div className="d-flex flex-column gap-4">
                    <div className="form-single">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="firstName"
                        placeholder="First Name"
                        onChange={(event)=> setFormData({...formdata, fname: event.target.value})}
                      />
                       {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.fname}
                  </span>
                }
                    </div>
                    <div className="form-single">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={(event)=> setFormData({...formdata, lname: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.lname}
                  </span>
                }
                    </div>
                    <div className="form-single">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        onChange={(event)=> setFormData({...formdata, email: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.email}
                  </span>
                }
                    </div>
                    <div className="form-single">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={(event)=> setFormData({...formdata, password: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.password}
                  </span>
                }
                    </div>
                    <div className="form-single">
                      <label htmlFor="cpassword" className="form-label">
                        Re Enter Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="cpassword"
                        id="cpassword"
                        onChange={(event)=> setFormData({...formdata, cpassword: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.cpassword}
                  </span>
                }
                    </div>
                    <div className="form-single text-center">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Sign up
                        </button>
                    </div>
                  </div>
                </form>
                <div className="already">
                <p className=" text-center">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="link-primary text-decoration-none"
                      >
                        Sign in
                      </Link>
                    </p>
                </div>
              </div>
      </section>
    </>
  );
};

export default Registration;
