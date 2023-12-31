import './App.css';
import Market from './features/home/Market';
import P2p from './features/home/P2p';
import LargeDevicesNav from './features/nav/LargeDevicesNav';
import Nav from './features/nav/Nav';
import NavOverLay from './features/nav/NavOverLay';
import { Routes, Route, } from 'react-router-dom';
import Newscomponent from './features/news/Newscomponent';
import Readblog from './features/news/Readblog';
import Footer from './features/footer/Footer';
import Transaction from './features/transition/Transaction';
import Smalldevicesnav from './features/nav/Smalldevicesnav';
import Exchange from './features/exchange/Exchange';
import Notification from './features/messageNotification/Notification';
import Overlay from './features/popupmessage/Overlay';
import { useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import Pnf from './features/pagenotfound/Pnf';
import Authuser from './features/auth/Authuser';

function Scroll() {
  const [scrolltopclass, setscrolltopclass] = useState('hidden opacity-0 transition-all ease-in-out duration-1000 bottom-20 md:bottom-6 right-5 lg:p-2.5 p-1.5 rounded-full bg-[#222121] animate-bounce cursor-pointer drop-shadow-2xl');
  function scrolltotop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  window.addEventListener("scroll", () => {
    const screenhight = window.scrollY
    if (screenhight > 150) {
      setscrolltopclass("fixed opacity-1 transition-all ease-in-out duration-1000 bottom-20 md:bottom-6 right-5 lg:p-2.5 p-1.5 rounded-full bg-[#222121] animate-bounce cursor-pointer drop-shadow-2xl")
    } else {
      setscrolltopclass('hidden opacity-0 transition-all ease-in-out duration-1000 bottom-20 md:bottom-6 right-5 lg:p-2.5 p-1.5 rounded-full bg-[#222121] animate-bounce cursor-pointer drop-shadow-2xl')
    }
  })

  return (
    <div className={scrolltopclass} onClick={scrolltotop}><div className="relative w-full h-full "><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-25"></span><IoIosArrowRoundUp className='text-teal-500 font-semibold lg:text-[30px] text-[25px]' /></div></div>
  )
}

function App() {
  const [overlay, setoverlay] = useState(true);
  setTimeout(() => setoverlay(false), 2000);
  console.log("App component");
  return (
    <section className='bg-black text-white pb-14 md:pb-0 scrollbar'>
      <section className='md:grid grid-cols-12 min-h-screen h-full scrollbar' id=''>
        {/* large device Navigation */}
        <header className='w-full col-span-2 min-h-screen  hidden lg:block '>
          <LargeDevicesNav />
        </header>
        {/* large device Navigation  end*/}
        <main className='col-span-12 lg:col-span-10 w-full '>
          {/* <Routes>
            <Route path="/" element={<Market />} />
            <Route path='/market' element={<Market />} />
            <Route path="/p2p" element={<P2p />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/news" element={<Newscomponent />} />
            <Route path="/message" element={<Notification />} />
            <Route path="/readblog/:id/:title" element={<Readblog />} />
            <Route path="*" Component={Pnf} />
          </Routes> */}
          {overlay ? <Overlay /> : <></>}
        </main>
      </section>
      
      <Scroll />
    </section>
  );
}

export default App;
