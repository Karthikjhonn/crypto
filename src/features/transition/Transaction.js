import React, { useState } from 'react'
import { BiTransfer } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import Toast from '../popupmessage/Toast';


function Transaction() {
  const [toastActive,setToastActive]=useState(false)
  function addFund(){  
    setToastActive(true)
    setTimeout(()=>setToastActive(false),3500)
  }
  const boxShadowStyle = {
    boxShadow: '0px 1px 0px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 48px rgba(17, 17, 26, 0.1)',
  };
  return (
    <div className='w-full max-h-[100vh] flex justify-center items-center md:p-0 p-4 h-full'>
      <div className='bg-[#1e1e1e] border bg-gradient-to-t from-gray-800 to-gray-700 rounded-xl w-full max-w-sm py-4' style={boxShadowStyle}>
        <div className='flex items-center gap-2 p-2.5 border-b border-gray-300/50'>
          <BiTransfer />
          <h1 className='text-[14px] font-medium'>Quick Transfer</h1>
        </div>
        <img src={require('../../images/transaction.png')} className='object-contain mx-auto my-6 w-48 h-48'/>
        <p className='text-[12px] font-normal capitalize text-center py-2.5'>you do not have any funds to transfer. <span className='block '>please check back later...</span> </p>
        <button className='border border-gray-200/50 px-2.5 py-1.5 rounded-[6px] text-[12px] capitalize mx-auto flex items-center gap-1 shadow-lg hover:border-gray-900 hover:bg-black transition-all duration-200' onClick={addFund}><AiOutlinePlus/> add funds</button>
      </div>
     {toastActive? <Toast message={"Insufficient funds. Please add funds to your account to complete this transaction."} openModel={2900} closeModel={3100} />:<></>}
    </div>
  )
}

export default Transaction

