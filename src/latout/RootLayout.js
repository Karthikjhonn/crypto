import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../features/footer/Footer'
import NavOverLay from '../features/nav/NavOverLay'
import Smalldevicesnav from '../features/nav/Smalldevicesnav'
import Nav from '../features/nav/Nav'
import LargeDevicesNav from '../features/nav/LargeDevicesNav'
import { IoIosArrowRoundUp } from "react-icons/io";

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
  
const RootLayout = () => {
    return (
        <section className='bg-black text-white'>
            {/* small device Navigation  start*/}
            <header className='lg:hidden sticky top-0 z-[99] shadow-xl bg-transparent'>
                <Nav />
                <div className='md:block hidden lg:hidden'>
                    <NavOverLay />
                </div>
            </header>
            <div className='fixed bottom-1 w-[98%] mx-auto left-1/2 -translate-x-1/2 z-[950] md:hidden'>
                <Smalldevicesnav />
            </div>
            {/* small device Navigation  end*/}
            <section className='md:grid grid-cols-12 min-h-screen h-full scrollbar' id=''>
                {/* large device Navigation */}
                <header className='w-full col-span-2 min-h-screen  hidden lg:block '>
                    <LargeDevicesNav />
                </header>
                {/* large device Navigation  end*/}
                <main className='col-span-12 lg:col-span-10 w-full '>
                    <Outlet />
                </main>
            </section>
            <Scroll/>
            <Footer />
        </section>
    )
}

export default RootLayout
