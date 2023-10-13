import React from 'react'
import {format} from 'date-fns';
import {FiChevronDown} from 'react-icons/fi';


function ProfileNav() {
    const date= format(new Date(), 'dd-MM-yyyy')
    return (
        <div className='flex justify-between items-center gap-3 flex-wrap-reverse md:flex-nowrap md:gap-0'>
            <div className='text-secondary capitalize'>
                <h1 className='font-semibold'>dashboard</h1>
                <p className='font-normal'>welcome back <b>karthik john!</b></p>
                <small className='text-slate-300 font-normal'>{date}</small>
            </div>
            {/* <div className='text-xl font-semibold text-slate-500 hidden md:block'>{date}</div> */}
            <div className='flex items-center gap-2 font-medium  '>
                <div className='w-12 h-12 rounded-full border-[2px] border-x-orange-400 border-y-amber-400 p-[1px]'><img src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=' className='object-cover w-full h-full rounded-full'></img></div>
                <p className='flex items-center capitalize gap-1 group/signout relative'>Karthik john <FiChevronDown />
                <div className='bg-white absolute top-full  border text-center left-0 w-full shadow hidden group-hover/signout:block transition-all ease-in-out duration-1000'><button className='py-2'>sign out</button></div>
                </p>
            </div>
        </div>
    )
}

export default ProfileNav
