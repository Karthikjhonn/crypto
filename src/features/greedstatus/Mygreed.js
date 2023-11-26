import React, { useState, useEffect } from 'react'
import { FiChevronRight } from "react-icons/fi";
import { BiStats } from "react-icons/bi";




function Topbar({ heading }) {
    return (
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-1'>
                <BiStats className='text-teal-400  text-lg' />
                <h1 className='capitalize text-lg font-medium'>{heading}</h1>
            </div>
            <div className='flex items-center font-semibold text-blue-500'>
                <p className='text-[12px] flex items-center cursor-pointer'>more</p>
                <FiChevronRight />
            </div>
        </div>
    )
}


function RotateStatus() {
    const [rotateDeg, setrotateDeg] = useState({ rotate: '245deg' })
    const [price, setprice] = useState('35,78,05')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const num = generateRandomNumber()
            setrotateDeg({ rotate: num + 'deg' })
            const price = generatePrice()
            const formatPrice = price.replace(/\B(?=(\d{2})+(?!\d))/g, ',')
            setprice(formatPrice)

        }, 2500);
        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [rotateDeg]);

    function generatePrice() {
        const min = 354504
        const max = 354896
        const price = Math.floor(Math.random() * (max - min + 2)) + min;
        return price.toString()
    }
    function generateRandomNumber() {
        const min = 131;
        const max = 305;
        const randomNegativeNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNegativeNumber);
        return randomNegativeNumber.toString()
    }


    return (
        <>
            <div className="absolute top-0 left-0 border-r-blue-500 border-b-blue-500 border-[#202020]/50 rotate-[-85deg] border-[8px] h-[150px] w-[150px] m-auto rounded-full transition-all duration-300 ease-linear" style={rotateDeg}></div>
            <p className='text-[14px] font-light absolute top-2/3 left-1/2 -translate-x-1/2 translate-y-1/2'>$ {price}</p>
        </>

    )
}



function Mygreed() {
    return (
        <div className='w-full h-full overflow-hidden min-h-[220px]'>
            <Topbar heading={'greed status'} />
            <div className='flex justify-center items-center  h-full '>
                <div className='min-h-[75px] w-[150px] m-auto relative overflow-hidden'>
                    <div className='absolute top-0 left-0 border-[8px] border-gray-100/25 min-h-[150px] w-[150px] m-auto rounded-full'></div>
                    <RotateStatus />
                </div>
            </div>
        </div>
    )
}

export default Mygreed
