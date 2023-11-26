import React from 'react'
import { FiX } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFramer } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { navActive, navStatus } from './navSlice';
import { NavLink } from 'react-router-dom';


function Smalldevicesnav() {
    function navigationActive(event) {
        var navLinkElm = document.querySelectorAll(".navLink")
        navLinkElm.forEach((item) => {
            if (item.innerText.toUpperCase() == event.toUpperCase()) {
                console.log(item);
                item.classList.add("font-[500]")
                item.classList.add("text-teal-500")
            }else{
                item.classList.remove("font-[500]")
                item.classList.remove("text-teal-500")
            }
        })
    }
    return (
        <div>
            <nav className='bg-white text-gray-400 p-2 px-0 rounded-[12px]'>
                <ul className='py-2 grid grid-cols-5'>
                    <NavLink onClick={() => navigationActive('market')} to="/market">
                        <li className='flex flex-col items-center navLink text-[13px] font-[500] text-teal-500 capitalize transition-all ease-in-out duration-200 '><FiActivity  />market</li>
                    </NavLink>
                    <NavLink onClick={() => navigationActive('exchange')} to="/exchange">
                        <li className='flex flex-col items-center navLink text-[13px] font-[300] capitalize transition-all ease-in-out duration-200 '><FiRepeat  />exchange</li>
                    </NavLink>
                    <NavLink onClick={() => navigationActive('p2p')} to="/p2p" className="mx-auto w-full h-full">
                        <li className='flex flex-col items-center navLink text-[13px] font-[300] capitalize transition-all ease-in-out duration-200 bg-white rounded-full px-2 py-1 w-[50px] h-[50px] mx-auto fixed -top-3 left-1/2 -translate-x-1/2'><FiFramer  /> p2p</li>
                    </NavLink>
                    <NavLink onClick={() => navigationActive('trade')} to="/transaction">
                        <li className='flex flex-col items-center navLink text-[13px] font-[300] capitalize transition-all ease-in-out duration-200 '><FiMinimize2  /> trade</li>
                    </NavLink>
                    <NavLink onClick={() => navigationActive('news')} to="/news">
                        <li className='flex flex-col items-center navLink text-[13px] font-[300] capitalize transition-all ease-in-out duration-200 '><FiBookOpen  />news</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Smalldevicesnav
