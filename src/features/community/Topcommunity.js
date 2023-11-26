import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";

const userimages=[
    require('../../images/useres/user1.png'),
    require('../../images/useres/user2.png'),
    require('../../images/useres/user3.png'),
]

function Topbar({ heading }) {
    return (
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-1'>
                <BsFillStarFill className='text-amber-400 ' />
                <h1 className='capitalize text-lg font-medium'>{heading}</h1>
            </div>
            <div className='flex items-center font-semibold text-blue-500'>
                <p className='text-[12px] flex items-center cursor-pointer'>more</p>
                <FiChevronRight />
            </div>
        </div>
    )
}

function User({ src, percentage, name, id }) {
    return (
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-2'>
                <div className='w-[35px] h-[35px]'><img src={src} alt='image' className='w-full h-full' /></div>
                <p className='font-normal capitalize'>{name} <span className='lowercase  text-[10px] text-half-white/75 block md:px-1'>{id}</span></p>
            </div>
            <div className=''>
                <button className='text-main capitalize whitespace-nowrap bg-slate-200 px-4 py-1.5 font-medium rounded-full text-[12px] hover:text-blue-500 hover:bg-slate-100 transition-all duration-200 ease-in-out hover:scale-[1.1] '>+ follow</button>
            </div>
        </div>
    )
}

function Topcommunity() {
    return (
        <div>
            <Topbar heading={'top accounts'} />
            <User name={'jackson'} id={'@jackson'} src={userimages[0]} />
            <User name={'Changpeng'} id={'@Changpeng'} src={userimages[1]} />
            <User name={'Demirors'} id={'@Demirors'} src={userimages[2]} />
        </div>
    )
}

export default Topcommunity
