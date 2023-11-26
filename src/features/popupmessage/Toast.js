import React, { useState, useEffect } from 'react'



function Toast({ message ,openModel ,closeModel}) {
    const [displaynone, setdisplaynone] = useState('bg-black/50 fixed top-0 left-0 w-full h-screen z-[700] overflow-hidden transition-all duration-150 ease-linear')
    const [toasthide, settoasthide] = useState('bg-white shadow-2xl text-[14px] text-center w-[92%] max-w-lg font-medium rounded-sm px-2.5 py-1.5 text-black inline-block absolute -bottom-12 left-1/2 -translate-x-1/2 transition-all duration-150 ease-linear capitalize')

    useEffect(() => {
        settoasthide('bg-white shadow-2xl text-[14px] text-center w-[92%] max-w-lg font-medium rounded-sm px-2.5 py-1.5 text-black inline-block absolute bottom-1/4 left-1/2 -translate-x-1/2  transition-all duration-150 ease-linear capitalize');
        return () => {
            setTimeout(() => {
                settoasthide('bg-white shadow-2xl text-[14px] text-center w-[92%] max-w-lg font-medium rounded-sm px-2.5 py-1.5 text-black inline-block absolute -bottom-12 left-1/2 -translate-x-1/2  transition-all duration-150 ease-linear capitalize ');
            }, openModel);
            setTimeout(() => {
                setdisplaynone('bg-black/50 fixed top-0 left-0 w-full h-screen z-[700] overflow-hidden transition-all duration-150 ease-linear hidden')
            }, closeModel);
        };
    }, []);


    return (
        <div className={displaynone}>
            <p className={toasthide}>{message}</p>
        </div>
    )
}

Toast.defaultProps = {
    message: "message={'Enter your message here'}",
    openModel:900,
    closeModel:1000
}

export default Toast
