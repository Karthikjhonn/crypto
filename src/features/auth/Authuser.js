import React, { useState } from 'react'
import App from '../../App';
import { DiSwift } from 'react-icons/di'
import { FiArrowRight } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { userName ,setusername} from './authSlice';


function Authuser() {
    const [getUserName, setUserName] = useState("");
    const dispatch = useDispatch();
    function setUser() {
        if (getUserName != "") {
            localStorage.setItem("username", getUserName);
            dispatch(setusername(true));
        }
    }

    return (
        <div>
             <div className='bg-black w-full min-h-screen flex items-center justify-center fixed top-0 left-0 z-[1001]'>
                <div className='bg-[#1e1e1f] p-2 py-6 rounded-[8px] border border-slate-50/25 w-[95%] max-w-xs  flex flex-col justify-center items-center h-56'>
                    <div className='flex items-center justify-center gap-1 p-2'>
                        <DiSwift className='w-6 h-6 text-blue-500' />
                        <h1 className='text-white font-medium text-2xl'>Altzone</h1>
                    </div>
                    <div className='inline-flex items-stretch my-4'>
                        <input type='text' className='border p-1.5 text-black focus:outline-none rounded-s-[4px] ' autoFocus placeholder='Enter Your Name :' onChange={(event) => { setUserName(event.target.value.trim()) }} />
                        <div className='bg-blue-500 self-stretch rounded-e-[4px] p-1 px-2.5 cursor-pointer hover:bg-blue-600' onClick={setUser}><FiArrowRight className='text-xl md:text-3xl m-auto h-full text-white' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Authuser
