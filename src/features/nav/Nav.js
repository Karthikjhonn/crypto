import React from 'react'
import { FiAlignRight } from 'react-icons/fi';
import NavOverLay from './NavOverLay';
import { useSelector ,useDispatch} from 'react-redux';
import {  navActive, navStatus } from './navSlice';
import {DiSwift} from 'react-icons/di'


function Nav() {
    const NavStatus = useSelector(navStatus)
    const dispatch = useDispatch()
    return (
        <nav className='flex items-center justify-between p-4 bg-half-white '>
            <div className='flex items-center gap-1'><DiSwift className='w-6 h-6 text-third' /><h1 className='text-main font-semibold text-xl'>Altzone</h1></div>
            <div onClick={()=>dispatch(navActive(false))} ><FiAlignRight className='w-6 h-6' /></div>
        </nav>
    )
}

export default Nav
