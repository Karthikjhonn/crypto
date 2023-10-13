import React from 'react'
import { DiSwift } from 'react-icons/di'
import { FiRepeat } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFramer } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';

function LargeDevicesNav() {
    return (
        <nav className='bg-half-white ps-4 py-4 w-full h-full '>
            <div className='sticky top-0'>
                <div className='flex items-center gap-1 p-2'>
                    <DiSwift className='w-6 h-6' />
                    <h1 className='text-main font-bold text-2xl'>Altzone</h1>
                </div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex items-center gap-2.5 text-main font-medium p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-main/25'><FiActivity />market</li>
                    <li className='flex items-center gap-2.5 text-main font-medium p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-main/25'><FiRepeat />exchange</li>
                    <li className='flex items-center gap-2.5 text-main font-medium p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-main/25'><FiFramer /> p2p</li>
                    <li className='flex items-center gap-2.5 text-main font-medium p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-main/25'><FiMinimize2 /> transfer</li>
                    <li className='flex items-center gap-2.5 text-main font-medium p-4 capitalize rounded-s-lg transition-all ease-in-out duration-200 hover:bg-main/25'><FiBookOpen />news</li>
                </ul>
            </div>
        </nav>
    )
}

export default LargeDevicesNav
