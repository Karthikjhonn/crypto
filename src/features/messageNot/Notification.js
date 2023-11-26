import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';

function Message() {
    return (
        <div className='flex gap-4 mb-3.5'>
            <div className='rounded-full bg-slate-200 w-[40px] h-[40px] mt-1'><img className='w-full h-full rounded-full object-contain' src='https://tse4.mm.bing.net/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&pid=Api&P=0&h=180' /></div>
            <div className='text-[11px] max-w-sm overflow-hidden'>
                <h1 className='text-[15px]'>Karthik</h1>
                <p className='text-gray-300/75 font-light whitespace-nowrap'>provides you with breaking you with bryou  news...</p>
                <p className='text-gray-300/75 font-extralight'>11/11/2023</p>
            </div>
        </div>
    )
}

function Notification() {
    let messages = []
    for (let index = 0; index < 20; index++) {
        messages.push(<Message key={index} />);
    }

    return (
        <section>
            <div className='py-2.5 px-3.5 bg-gradient-to-tl from-slate-500 to-slate-800 sticky top-[60px] lg:hidden z-50' onClick={() => window.history.back()}><IoArrowBackOutline className='text-2xl ' /></div>
            <section className='container mx-auto p-4'>
                    {messages}               
            </section>
        </section>
    )
}

export default Notification
