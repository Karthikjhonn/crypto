import {  Route,  RouterProvider,  createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
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
