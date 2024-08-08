import React from "react";
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
 
export const validateUser = yup.object().shape({
    username: yup.string().max(10).required("Required"),
    email: yup.string().email("Please Enter Email").required("Required"),
    password: yup.string().min(5).matches(passwordRules,{message: "Please enter a strong password"}).required("Required"),
})
export const validateLogin = yup.object().shape({
    username: yup.string().required("Please Enter Username"),
    password: yup.string().required("Required")
})