import { FiX } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFramer } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { navActive, navStatus } from './navSlice';


function NavOverLay() {
    const NavStatus = useSelector(navStatus)
    const dispatch = useDispatch()
    return (
        <div className={NavStatus ? "bg-white translate-x-[1150px] transition-all duration-500 ease-linear w-full h-screen fixed top-0 left-0 overflow-y-scroll" : "bg-white w-full h-screen fixed top-0 left-0 translate-x-0 block transition-all duration-500 ease-linear overflow-y-scroll "}>
            <ul className=' px-4 py-14 flex flex-col justify-between h-full bg-white '>
                <div>
                    <li className='flex items-center gap-2.5 text-main font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-main/25'><FiRepeat />exchange</li>
                    <li className='flex items-center gap-2.5 text-main font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-main/25'><FiActivity />market</li>
                    <li className='flex items-center gap-2.5 text-main font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-main/25'><FiFramer /> p2p</li>
                    <li className='flex items-center gap-2.5 text-main font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-main/25'><FiMinimize2 /> transfer</li>
                    <li className='flex items-center gap-2.5 text-main font-medium capitalize p-2 mb-2 transition-all ease-in-out duration-200 hover:bg-main/25'><FiBookOpen />news</li>
                </div>
                <div>
                    <p className='rounded flex justify-center items-center gap-1 text-main font-medium p-2'><FiArrowLeftCircle />Log Out</p>
                </div>
            </ul>
            {/* close btn  */}
            <div onClick={() => dispatch(navActive(true))} className='absolute top-4 right-4 w-10 h-10 flex justify-center items-center p-1'><FiX className='w-6 h-6' /></div>
        </div>
    )
}

export default NavOverLay
