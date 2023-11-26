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



function NavOverLay() {
    const NavStatus = useSelector(navStatus)
    const dispatch = useDispatch()
    return (
        <div className={NavStatus ? "bg-[#202020]/50 translate-x-[1150px] transition-all duration-150 ease-linear w-full h-screen fixed top-0 left-0 overflow-y-scroll" : "bg-[#202020]/50 w-full h-screen fixed top-0 left-0 translate-x-0 block transition-all duration-150 ease-linear overflow-y-scroll "}>
            <ul className=' px-4 py-14 flex flex-col justify-between h-full w-[55vw] bg-[#202020] ms-auto'>
                <div>
                    <NavLink onClick={()=>dispatch(navActive(true))} to="/market">
                        <li className='flex items-center gap-2.5 text-white font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-white/25'><FiActivity />market</li>
                    </NavLink>
                    <NavLink onClick={()=>dispatch(navActive(true))} to="/p2p">
                        <li className='flex items-center gap-2.5 text-white font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-white/25'><FiFramer /> p2p</li>
                    </NavLink>
                    <NavLink onClick={()=>dispatch(navActive(true))} to="/exchange">
                        <li className='flex items-center gap-2.5 text-white font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-white/25'><FiRepeat />exchange</li>
                    </NavLink>
                    <NavLink onClick={()=>dispatch(navActive(true))} to="/transaction">
                        <li className='flex items-center gap-2.5 text-white font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-white/25'><FiMinimize2 /> Transactions</li>
                    </NavLink>
                    <NavLink onClick={()=>dispatch(navActive(true))} to="/news">
                        <li className='flex items-center gap-2.5 text-white font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-white/25'><FiBookOpen />news</li>
                    </NavLink>
                </div>
                <div>
                    <p className='rounded flex justify-center items-center gap-1 text-white font-light p-2'><FiArrowLeftCircle />Log Out</p>
                </div>
            </ul>
            {/* close btn  */}
            <div onClick={() => dispatch(navActive(true))} className='absolute top-4 right-4 w-10 h-10 flex justify-center items-center p-1 text-white '><FiX className='w-6 h-6' /></div>
        </div>
    )
}

export default NavOverLay
