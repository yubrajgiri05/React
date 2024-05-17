import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    if(formdata.lnamel === "" || formdata.lname === null){
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
      <h2>Registration</h2>
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details to register
                      </h3>
                    </div>
                  </div>
                </div>
                {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.fname} {errors.lname} {errors.email} {errors.password} {errors.cpassword}
                  </span>

                }
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
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
                    </div>
                    <div className="col-12">
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
                    </div>
                    <div className="col-12">
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
                    </div>
                    <div className="col-12">
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
                    </div>
                    <div className="col-12">
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
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className=" text-secondary text-end">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
