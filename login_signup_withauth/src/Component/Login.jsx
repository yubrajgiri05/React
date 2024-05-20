import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Component/login.css"
import axios from "axios";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata)
    let isvalid = true;
    let validationErrors={}
    
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
    

    
      axios.get('http://localhost:8000/users',formdata)
      .then(result =>{
        result.data.map(user =>{
          if(user.email === formdata.email){
            if(user.password === formdata.password){
              alert("Login Successfully")
              navigate("/")
            }
            else{
              isvalid = false;
              validationErrors.password="Wrong password;"
            }
          } else if(formdata.email !==""){
            isvalid = false;
            validationErrors.email="Wrong Email"
          }
        })
        setErrors(validationErrors)
        setValid(isvalid)
      })
      .catch(err => console.log(err))

  }
  return (
    <>
     <section className="form">
        <div className="container">
               
                <form onSubmit={handleSubmit} className="form-class">
                  <div className="d-flex flex-column gap-4">
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
                      Do not have an account?{" "}
                      <Link
                        to="/registration"
                        className="link-primary text-decoration-none"
                      >
                        Registration
                      </Link>
                    </p>
                </div>
              </div>
      </section>
    </>
  )
}

export default Login
