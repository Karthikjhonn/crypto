import React, { useState } from 'react'
import App from './App'
import { setusername, userName } from './features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Route, RouterProvider,  createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import RootLayout from './latout/RootLayout';
import Market from './features/home/Market';
import P2p from './features/home/P2p';
import Exchange from './features/exchange/Exchange';
import Transaction from './features/transition/Transaction';
import Newscomponent from './features/news/Newscomponent';
import Readblog from './features/news/Readblog';
import Pnf from './features/pagenotfound/Pnf';
import Notification from './features/messageNotification/Notification';
import Authuser from './features/auth/Authuser';



function AuthTest() {
  console.log("Auth test............");
  const getusername = localStorage.getItem("username");
  const dispatch = useDispatch()
  if (getusername != null) {
    dispatch(setusername(true))
  }
  const islogin = useSelector(userName);
  console.log("user name : ", getusername);
  // if(!islogin){
  //   window.history.pushState(null, null, 'login');
  // }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        {/* <Route  element={<App />} /> */}
        <Route index element={<Market />} />
        <Route path='market' element={<Market />} />
        <Route path="p2p" element={<P2p />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="news" element={<Newscomponent />} />
        <Route path="message" element={<Notification />} />
        <Route path="login" element={<Authuser />} />
        <Route path="readblog/:id/:title" element={<Readblog />} />
        <Route path="*" Component={<Pnf/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
      {/* {islogin ? <Market /> : <Authuser />} */}

    </div>
  )
}

export default AuthTest
