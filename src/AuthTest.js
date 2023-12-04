import React, { useState } from 'react'
import App from './App'
import { setusername, userName } from './features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Authuser from './features/auth/Authuser';

function AuthTest() {
  const getusername = localStorage.getItem("username");
  const dispatch = useDispatch()
  if (getusername != null) {
    dispatch(setusername(true))
  }
  const islogin = useSelector(userName);
  console.log("user name : ", getusername);
 
  return (
    <div>
      {islogin ? <App /> : <Authuser />}
    </div>
  )
}

export default AuthTest
