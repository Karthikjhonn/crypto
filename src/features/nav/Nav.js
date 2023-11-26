import React from 'react'
import { FiAlignRight } from 'react-icons/fi';
import NavOverLay from './NavOverLay';
import { useSelector ,useDispatch} from 'react-redux';
import {  navActive, navStatus } from './navSlice';
import {DiSwift} from 'react-icons/di'
import {MdCircleNotifications} from 'react-icons/md'
import { NavLink } from 'react-router-dom';


function Nav() {
    const NavStatus = useSelector(navStatus)
    const dispatch = useDispatch()
    return (
        <nav className='flex items-center justify-between p-4 bg-black '>
            <div className='flex items-center gap-1'><DiSwift className='w-6 h-6 text-blue-500' /><h1 className='text-white font-semibold text-xl'>Altzone</h1></div>
            <div onClick={()=>dispatch(navActive(false))} className='hidden md:block lg:hidden' ><FiAlignRight className='w-6 h-6 text-white' /></div>
            <NavLink to='/message' className="md:hidden"><div className='relative text-xl '><MdCircleNotifications /><span className='w-[7px] h-[7px] absolute top-0 right-0 bg-red-500/[.9] rounded-full'></span></div></NavLink>
        </nav>
    )
}

export default Nav
