import React from 'react'

function Overlay() {
    return (
        <div className='fixed bottom-0 left-0 w-full h-[90vh] bg-black z-[1050] overflow-hidden md:hidden'>
            <div className='bg-[#464545] w-full h-10 animate-pulse'></div>
            <div className='px-4  animate-pulse'>
                <div className='bg-[#464545] rounded-md w-full animate-pulse mt-8 p-2'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[50px] h-[50px] bg-[#202020] rounded-full animate-pulse'></div>
                        <div className='w-28 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                    </div>
                    <div className='my-2.5 w-28 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                    <div className='mb-2.5 w-10/12 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                    <div className='mb-2.5 w-16 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                </div>
                <div className='bg-[#464545] rounded-md w-full  mt-8 p-2 animate-pulse'>
                    <div className='my-2.5 w-28 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                    <div className='mb-2.5 w-10/12 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                    <div className='mb-2.5 w-16 h-4 bg-[#202020] rounded-md animate-pulse'></div>
                </div>
                <div className='bg-[#464545] rounded-md w-full h-44 mt-8 p-2 animate-pulse'></div>
            </div>
        </div>
    )
}

export default Overlay
