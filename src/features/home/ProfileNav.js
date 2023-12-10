import React from 'react'
import {format} from 'date-fns';
import {FiChevronDown} from 'react-icons/fi';
import { setusername } from '../auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProfileNav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = localStorage.getItem("username");
    const date= format(new Date(), 'dd-MM-yyyy')
    function signout(){
        console.log("signout")
        localStorage.removeItem("username")
        dispatch(setusername(true));
        navigate('/login',{ replace: true })
    }
    return (
        <div className='flex justify-between items-center gap-3 flex-wrap-reverse  px-4 py-2 bg-[#2B2B2B]/50 rounded-[12px] md:flex-nowrap md:gap-0'>
            <div className='text-white capitalize'>
                <h1 className='font-[500]'>dashboard</h1>
                <p className='font-normal'>welcome back <b className='text-[12px]'>{userName}!</b></p>
                <small className='text-slate-100 font-light'>{date}</small>
            </div>
            {/* <div className='text-xl font-semibold text-slate-500 hidden md:block'>{date}</div> */}
            <div className='flex items-center gap-2 font-medium  text-white'>
                <div className='w-12 h-12 rounded-full border-[2px] border-x-orange-400 border-y-amber-400 p-[1px]'><img src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=' className='object-cover w-full h-full rounded-full'></img></div>
                <p className='flex items-center capitalize gap-1 group/signout relative min-w-[150px]'>{userName?userName:"karthik john"} <FiChevronDown />
                <div className='bg-white text-black absolute top-full  border text-center left-0 shadow hidden group-hover/signout:block transition-all ease-in-out duration-1000' onClick={signout}><button className='py-2 px-4 text-[14px] font-normal'>sign out</button></div>
                </p>
            </div>
        </div>
    )
}

export default ProfileNav
