import React from 'react'
import { DiSwift } from 'react-icons/di'
import { FiRepeat } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFramer } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


function LargeDevicesNav() {

    function redirectPageTop() {
        // window.scroll(
        //     {
        //         top: 0,
        //     }
        // )
    }
    function navigationActive(event) {
        var navLinkElm = document.querySelectorAll(".navLink")
        navLinkElm.forEach((item) => {
            if (item.innerText.toUpperCase() == event.toUpperCase()) {
                console.log(item);
                item.classList.add("font-[500]")
                item.classList.add("bg-blue-500")
                item.classList.remove("hover:bg-[#2B2B2B]")
            } else {
                item.classList.remove("font-[500]")
                item.classList.remove("bg-blue-500")
                item.classList.add("hover:bg-[#2B2B2B]")
            }
        })
    }
    return (
        <nav className='bg-black ps-4 py-4 w-full h-full border-r border-gray-50/25'>
            <div className='sticky top-0'>
                <NavLink to="/market"  onClick={()=>navigationActive("market")}>
                    <div className='flex items-center gap-1 p-2'>
                        <DiSwift className='w-6 h-6 text-blue-500' />
                        <h1 className='text-white font-bold text-2xl'>Altzone</h1>
                    </div>
                </NavLink>
                <ul className='flex flex-col gap-1'>
                    <NavLink onClick={()=>navigationActive("market")} to="/market">
                        <li className='flex items-center gap-2.5 navLink font-[500] bg-blue-500 text-white p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200  hover:cursor-pointer'><FiActivity />market</li>
                    </NavLink>
                    <NavLink onClick={()=>navigationActive("p2p")} to="/p2p">
                        <li className='flex items-center gap-2.5 navLink font-[400] text-white p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-[#2B2B2B] hover:cursor-pointer'><FiFramer />p2p</li>
                    </NavLink>
                    <NavLink onClick={()=>navigationActive("exchange")} to="/exchange">
                        <li className='flex items-center gap-2.5 navLink font-[400] text-white p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-[#2B2B2B] hover:cursor-pointer'><FiRepeat />exchange</li>
                    </NavLink>
                    <NavLink onClick={()=>navigationActive("Transactions")} to="/transaction">
                        <li className='flex items-center gap-2.5 navLink font-[400] text-white p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-[#2B2B2B] hover:cursor-pointer'><FiMinimize2 /> Transactions</li>
                    </NavLink>
                    <NavLink onClick={()=>navigationActive("news")} to="/news">
                        <li className='flex items-center gap-2.5 navLink font-[400] text-white p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-[#2B2B2B] hover:cursor-pointer'><FiBookOpen />news</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default LargeDevicesNav
