import React, { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import User from './Pages/User'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendMsg from './Pages/SendMsg'
import ViewMsg from './Pages/ViewMsg'
import { AuthProvider } from './auth/authContext'
import ProtectedRoute from './auth/protectedRoute'




function App() {
  
  return (
    <>
       <ToastContainer />
       <AuthProvider>
       <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoute />}>
      <Route path='/user' element={<User />} />
      <Route path='/user/msg' element={<ViewMsg />} />
      </Route>
      <Route path='/:id' element={<SendMsg />} />
    </Routes>
</AuthProvider>
    </>
  )
}

export default App

