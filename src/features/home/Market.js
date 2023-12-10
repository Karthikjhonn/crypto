import React, { useState } from 'react'
import ProfileNav from './ProfileNav';
import Datatable from '../table/TableData';
import TrendingCard from '../todaytrending/TrendingCard';
import Previewchart from '../todaytrending/Previewchart';
import { FiEyeOff } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import News from '../news/News';
import Overlay from '../popupmessage/Overlay';
import { Navigate } from 'react-router-dom';

function ShowBalance() {
    const [showBalance, hideBalance] = useState('password')
    function showBal() {
        if (showBalance == "text") {
            hideBalance("password")
        } else if (showBalance == "password") {
            hideBalance("text")
        }
    }
    return (
        <div className='inline-flex gap-2.5 items-center py-1 w-auto'>
            <input type={showBalance} value="$ 345,045.36" className='w-44 bg-inherit font-semibold text-2xl text-blue-500 inline-block focus:outline-none' disabled />
            {showBalance == "text" ? <FiEyeOff className='cursor-pointer' onClick={showBal} /> : <FiEye className='cursor-pointer' onClick={showBal} />}
        </div>
    )
}

function Market() {
    
    window.scrollTo({
        top: 0,
    })

    const [overlay, setoverlay] = useState(true)
    setTimeout(() => setoverlay(false), 500);

    function changeMonth(events, params) {
        // events.target.className="capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300 bg-blue-500 font-medium text-white"
        document.querySelector("#monthData img").src = require(`../../images/monthlydata/month${params}.png`)
    }
    return (
        <main>
            <div className='bg-[#00f5d4] py-1 mb-1 px-2 md:px-4'>
                <marquee className="text-[12px] text-black  max-w-md">Find out where and how to purchase digital currencies.<span>Stay up to date with the latest developments in the cryptocurrency world...</span></marquee>
            </div>
            <section className=' w-full py-4 px-4 container mx-auto bg-black'>
                <ProfileNav />
                <section className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3 my-4'>
                    <div className='text-white p-4 bg-half-black inline-block rounded-[8px]'>
                        <p className='capitalize font-medium text-[14px]'>total asset value</p>
                        <ShowBalance />
                        <p><small>- 14,589.225</small></p>
                    </div>
                    <div className='bg-[#202020] p-4 rounded-[8px] hidden md:block'>
                        <div className='flex flex-col gap-2 items-center'>
                            <button className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300 w-full'>deposit</button>
                            <button className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300 w-full'>withdraw</button>
                        </div>
                    </div>
                    <div className='bg-[#202020] p-4 rounded-[8px] hidden md:flex md:space-x-3 items-baseline'>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-full rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/2 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 h-12 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/3 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/4 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/6 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-16 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/3 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 h-12 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/3 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/4 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-1/6 rounded-t-sm'></div>
                        <div className='hover:-translate-y-[3px] transition-all duration-150 ease-in w-4 bg-gradient-to-b from-fuchsia-500 via-fuchsia-700 to-fuchsia-900 h-8 rounded-t-sm'></div>
                    </div>
                </section>
                <TrendingCard />
                <div className='py-6 md:px-4'>
                    <h1 className='md:text-3xl text-lg font-[300] text-white py-2'>Today's Cryptocurrency Prices by Market Cap</h1>
                    <p className='text-half-white text-[14px]'>The global crypto market cap is $1.11T, a <span className='text-upcolor'>2.61%</span> increase over the last day.<a href='#' className='underline text-blue-500 block md:inline-block md:ms-2'>Read More</a></p>
                </div>
                <Previewchart />
                <Datatable />
                <section className='text-white py-4'>
                    <h1 className='py-2.5 font-medium text-lg'>Getting Started with Cryptocurrency</h1>
                    <ul className='text-[14px]'>
                        <li>Creating a Wallet: Learn how to set up a secure digital wallet to store your cryptocurrencies.</li>
                        <li>Buying Cryptocurrency: Find out where and how to purchase digital currencies.
                        </li>
                        <li>Storing Your Assets: Understand the different wallet types, including hardware, software, and paper wallets.
                        </li>
                        <li>Making Transactions: Explore the process of sending and receiving cryptocurrencies.
                        </li>
                        <li>Security Tips: Keep your investments safe with our security best practices.</li>
                    </ul>
                </section>
                <News />
            </section>
            {overlay ? <Overlay /> : <></>}
        </main>
    )
}

export default Market
