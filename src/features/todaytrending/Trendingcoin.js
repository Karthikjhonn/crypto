import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { BiSolidUpArrow } from "react-icons/bi";
import { PiFireFill } from "react-icons/pi";


function Coin({ src, percentage, name, symbol }) {
    return (
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-2'>
                <div className='w-[35px] h-[35px]'><img src={src} alt='image' className='w-full h-full' /></div>
                <p className='font-medium capitalize'>{name} <span className='uppercase px-1 text-[12px] bg-[#202020] rounded-sm text-half-white/75'>{symbol}</span></p>
            </div>
            <div className='flex w-16 gap-2 items-center'>
                <BiSolidUpArrow className='text-upcolor text-[10px]' />
                <p className='text-[14px] font-medium text-upcolor'> {percentage}%</p>
            </div>
        </div>
    )
}

function Topbar({ heading }) {
    return (
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-1'>
                <PiFireFill className='text-orange-500 text-lg' />
                <h1 className='capitalize text-lg font-medium'>{heading}</h1>
            </div>
            <div className='flex items-center font-semibold text-blue-500'>
                <p className='text-[12px] flex items-center cursor-pointer'>more</p>
                <FiChevronRight />
            </div>
        </div>
    )
}

const toptrendingimage = [
    require('../../images/slider/bitcoin logo.png'),
    require('../../images/slider/bitcoin logo2.png'),
    require('../../images/slider/bitcoin logo3.png'),
]

function Trendingcoin() {
    return (
        <div>
            <Topbar heading="top trending"  />
            <Coin src={toptrendingimage[0]} percentage={2.85} name={'bitcoin'} symbol={'btc'} />
            <Coin src={toptrendingimage[1]} percentage={1.69} name={'ether'} symbol={'etc'} />
            <Coin src={toptrendingimage[2]} percentage={0.56} name={'azagx'} symbol={'agc'} />
        </div>
    )
}

export default Trendingcoin
