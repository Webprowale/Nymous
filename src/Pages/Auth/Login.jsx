import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik/dist";
import { validateLogin } from "../../schemas";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom/dist";
import { useAuth } from "../../auth/authContext";

function Login() {
  const { login } = useAuth();
  
  const navigate = useNavigate()
  const onSubmit = async(values)=>{
    try{
       console.log(values)
        toast.success("Logged In Successfully!",{
          onClose:()=> navigate("/user")
        })
        login()
    }
    catch(error){
    toast.error(error.message)
    }
  }
const { values, handleBlur, handleChange, handleSubmit, isSubmitting, touched, errors,} = useFormik({
initialValues:{
  username: "",
  password: ""
},
validationSchema: validateLogin,
onSubmit,
})
  return (
    <div className="container-fluid hero login">
      <div className=" mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold  fs-2 fText">Member Login</h2>
          <p className="mb-5 fw-semibold">
            Receive anonymous compliments from your friends and send anonymous
            messages to your friends for free.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter username..."
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">Username</label>
            {errors.username && touched.username ? 
              <small className="fw-semibold text-danger">{errors.username}</small>
            : 
              ""
            }
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && touched.password ? 
              <small className="fw-semibold text-danger">
                {errors.password}
              </small>
             : 
              ""
            }
          </div>
          <Link className="text-primary  fs-6 fw-semibold ms-md-5 ms-3 ">
            Forgotten Password
          </Link>
          <button
            type="submit"
            className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3"
            disabled={isSubmitting}
            
          >
           {isSubmitting ? 'Loginin..': 'Login'} 
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
