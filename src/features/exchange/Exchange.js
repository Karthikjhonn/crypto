import React, { useState } from 'react'

function Exchange() {
    const [overlay, setoverlay] = useState(true)
    setTimeout(() => setoverlay(false), 500);
    window.scrollTo({
        top: 0,
    })
    function changeMonth(events, params) {
        // events.target.className="capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300 bg-blue-500 font-medium text-white"
        document.querySelector("#monthData img").src = require(`../../images/monthlydata/month${params}.png`)
    }
    return (
        <div className='container mx-auto p-4'>
            <section className='py-8 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='grid grid-cols-2 gap-3 place-content-center order-2'>
                    <button onClick={(events) => changeMonth(events, 1)} className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300 '>February</button>
                    <button onClick={(events) => changeMonth(events, 2)} className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300'>march</button>
                    <button onClick={(events) => changeMonth(events, 3)} className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300'>april</button>
                    <button onClick={(events) => changeMonth(events, 4)} className='capitalize px-8 py-1.5 border border-blue-500 text-blue-500 font-light rounded-[4px] hover:bg-blue-500 hover:text-white hover:font-medium transition-all ease-in-out duration-300'>may</button>
                </div>
                <div id='monthData' className='lg:col-span-2'>
                    <img src={require('../../images/monthlydata/month1.png')} className='object-contain w-full h-full max-w-4xl max-h-[450px]  rounded-[8px] md:rounded-[16px]' />
                </div>
            </section>
           {overlay? <div className='w-full h-screen py-24 bg-black fixed top-0 left-0 px-4 md:hidden'>
                <div className='w-full h-52 rounded-[8px] bg-[#202021] animate-pulse'></div>
                <div className=' grid grid-cols-2 gap-3 my-4 animate-pulse'>
                    <div className='w-full h-7 bg-[#1e1e1e] rounded-[4px]'></div>
                    <div className='w-full h-7 bg-[#1e1e1e] rounded-[4px]'></div>
                    <div className='w-full h-7 bg-[#1e1e1e] rounded-[4px]'></div>
                    <div className='w-full h-7 bg-[#1e1e1e] rounded-[4px]'></div>
                </div>
            </div>
            :
            <></>}
        </div>

    )
}

export default Exchange
