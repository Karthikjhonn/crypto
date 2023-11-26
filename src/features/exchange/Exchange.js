import React from 'react'

function Exchange() {
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
        </div>

    )
}

export default Exchange
