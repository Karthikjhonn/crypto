import React, { useState } from 'react'
import Trendingcoin from '../todaytrending/Trendingcoin'
import Topcommunity from '../community/Topcommunity'
import Mygreed from '../greedstatus/Mygreed'
import Datatable from '../table/TableData'

function P2p() {
    const [overlay, setoverlay] = useState(true)
    setTimeout(() => setoverlay(false), 500);
    window.scrollTo({
        top: 0,
    })
    return (
        <main className=' w-full py-4 px-4 container mx-auto'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:p-2.5 '>
                <div className='p-3 bg-[#202020] rounded-[12px]'>
                    <Trendingcoin />
                </div>
                <div className='p-3 bg-[#202020] rounded-[12px]'>
                    <Topcommunity />
                </div>
                <div className='p-3 bg-[#202020] rounded-[12px] md:hidden lg:block'>
                    <Mygreed />
                </div>

            </section>
            <section className='my-4'>
                <div>
                    <p className='text-[12px] font-light py-2 px-1 md:px-4'>Cryptocurrencies are digital or virtual currencies that use cryptography for security. They are decentralized and operate on a technology called blockchain,<span className='block py-2 md:py-0'>
                        which is a distributed ledger that records all transactions across a network of computers. Unlike traditional currencies, cryptocurrencies are not controlled by any central authority, making them a groundbreaking innovation in the world of finance.</span></p>
                    <div className='pt-8 rounded-[12px]'>
                        <img src={require('../../images/home page bg2.png')} className='rounded-[12px] w-full max-w-3xl object-contain mx-auto' />

                    </div>
                </div>
            </section>
            <section>
                <Datatable />
            </section>
            {overlay ?  <Overlay /> : <></>}
        </main>
    )
}

function Overlay() {
    return (
        <div className='fixed top-0 left-0 py-20 bg-black px-4 h-screen w-full overflow-hidden md:hidden'>
            <div className='bg-[#1e1e1e] w-full h-48 rounded-[12px] p-4 flex flex-col justify-evenly animate-pulse mb-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
            </div>
            <div className='bg-[#1e1e1e] w-full h-48 rounded-[12px] p-4 flex flex-col justify-evenly animate-pulse mb-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
            </div>
            <div className='bg-[#1e1e1e] w-full h-48 rounded-[12px] p-4 flex flex-col justify-evenly animate-pulse mb-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-28 h-4 rounded-full bg-[#2f2f2f]'></div>
                    <div className='w-16 h-4 rounded-full bg-[#2f2f2f]'></div>
                </div>
            </div>
        </div>
    )
}
export default P2p
