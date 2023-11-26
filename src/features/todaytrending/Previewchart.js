import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import Datachart from '../charts/Datachart';

function Previewchart() {
    return (
        <section>
            <p className='font-medium py-2.5 text-white md:px-4'><b>NFT</b></p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {/* left  */}
                <div className='h-full md:col-span-2 lg:col-span-2'>
                   <Datachart/>
                    {/* <div className='shadow-md rounded-[8px] w-full h-full'><img src={require('../../images/homebg1.png')} className='object-cover w-full h-full rounded-[8px]' alt='banner image' /></div> */}
                </div>
                {/* center  */}
                <div className='flex flex-col gap-2'>
                    <div className=' rounded-[8px] shadow-md relative overflow-hidden'>
                        <img src={require('../../images/slider/upslide.png')} className='object-cover w-full h-full rounded-[8px]' />
                        <div className='place absolute top-2 left-2 text-white  w-full'>
                            <div className='flex items-center gap-1 font-normal text-[12px] md:text-[14px] '>
                                <img src={require('../../images/slider/bitcoin logo.png')} className='object-cover w-10 h-10 rounded-full inline-block me-1' />
                                <span className='font-normal'>Bitcoin (24Hrs)</span>
                                <span className='px-2.5 text-[16px] text-upcolor'>+2.3%</span>
                            </div>
                            <p className='p-1 py-3 '>$ 45,048.36</p>
                        </div>
                    </div>

                    <div className=' rounded-[8px]  shadow-md relative'>
                        <img src={require('../../images/slider/downslide.png')} className='object-cover w-full h-full rounded-[8px]' />
                        <div className='absolute top-2 left-2 text-white'>
                            <div className='flex items-center gap-1 font-normal text-[12px] md:text-[14px]'>
                                <img src={require('../../images/slider/bitcoin logo2.png')} className='object-cover w-10 h-10 rounded-full inline-block me-1' />
                                <span className=''>Ethereum (24Hrs)</span>
                                <span className='p-2 text-[16px] text-downcolor'> -3.5%</span>
                            </div>
                            <p className='p-1 py-3'>$ 36,168.07</p>
                        </div>
                    </div>
                </div>
                {/* right  */}
                <div className=' p-4 shadow-md rounded-xl h-full bg-[#936639]'>
                    <div className='flex items-center justify-between'>
                    <p className='font-medium text-lg text-slate-50'>Balance</p>
                    <button className='capitalize text-white  rounded-[8px] text-[12px]'>see All</button>
                    </div>
                    <div className=' '>
                        <div className='py-4 border-b-2 border-slate-50/25'>
                            <div className='flex justify-between items-center '>
                                <div className='inline-flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='m-auto w-5 h-5' viewBox="0 0 48 48">
                                        <linearGradient id="DVSfvSNjr8xfsZzZZgSija_XDum8M4mrAZQ_gr1" x1="13.999" x2="34.001" y1="6.677" y2="41.323" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffda1c"></stop><stop offset="1" stopColor="#feb705"></stop></linearGradient><path fill="url(#DVSfvSNjr8xfsZzZZgSija_XDum8M4mrAZQ_gr1)" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path d="M27,10h-1c-1.103,0-2,0.897-2,2c0-1.103-0.897-2-2-2h-1c-1.103,0-2,0.897-2,2v1h-1 c-1.103,0-2,0.897-2,2v18c0,1.103,0.897,2,2,2h1v1c0,1.103,0.897,2,2,2h1c1.103,0,2-0.897,2-2v-1v1c0,1.103,0.897,2,2,2h1 c1.103,0,2-0.897,2-2v-1.391c1.116-0.289,2.056-0.74,2.802-1.344C33.26,32.083,34,30.352,34,28.121 c0-1.341-0.366-2.504-1.086-3.457c-0.315-0.421-0.684-0.782-1.104-1.081c0.309-0.282,0.583-0.601,0.821-0.955 c0.608-0.914,0.915-1.972,0.915-3.147c0-2.119-0.763-3.764-2.269-4.887c-0.626-0.467-1.376-0.827-2.277-1.09V12 C29,10.897,28.103,10,27,10L27,10z M22,18h3.199c1.178,0,1.678,0.247,1.871,0.394c0.259,0.197,0.391,0.588,0.391,1.161 c0,0.527,0,1.409-2.115,1.445L22,21V18L22,18z M22,26h4c1.322,0.019,2,0.824,2,2.391C28,29.982,25.932,30,25.844,30H22V26L22,26z" opacity=".05"></path><path d="M27,10.5h-1c-0.827,0-1.5,0.673-1.5,1.5v1.5h-1V12c0-0.827-0.673-1.5-1.5-1.5h-1 c-0.827,0-1.5,0.673-1.5,1.5v1.5H18c-0.827,0-1.5,0.673-1.5,1.5v18c0,0.827,0.673,1.5,1.5,1.5h1.5V36c0,0.827,0.673,1.5,1.5,1.5h1 c0.827,0,1.5-0.673,1.5-1.5v-1.5h1V36c0,0.827,0.673,1.5,1.5,1.5h1c0.827,0,1.5-0.673,1.5-1.5v-1.786 c1.213-0.264,2.216-0.713,2.987-1.338c1.336-1.083,2.013-2.683,2.013-4.755c0-1.23-0.331-2.291-0.985-3.156 c-0.422-0.564-0.952-1.008-1.58-1.329c0.509-0.345,0.938-0.775,1.281-1.287c0.552-0.829,0.831-1.794,0.831-2.868 c0-1.953-0.696-3.462-2.068-4.487c-0.657-0.491-1.471-0.855-2.478-1.109V12C28.5,11.173,27.827,10.5,27,10.5L27,10.5z M21.5,17.5 h3.699c1.01,0,1.742,0.167,2.174,0.496c0.395,0.301,0.588,0.811,0.588,1.559c0,0.885-0.296,1.906-2.606,1.945l-3.855,0V17.5 L21.5,17.5z M21.5,25.5H26c1.61,0.023,2.5,1.05,2.5,2.891c0,2.085-2.548,2.109-2.656,2.109H21.5V25.5L21.5,25.5z" opacity=".07"></path><path fill="#fff" d="M21,11h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C20,11.448,20.448,11,21,11z M26,11h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C25,11.448,25.448,11,26,11z M21,32h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C20,32.448,20.448,32,21,32z M26,32h1c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1v-3 C25,32.448,25.448,32,26,32z M17,33V15c0-0.552,0.448-1,1-1h7.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086 c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555 C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H18C17.448,34,17,33.552,17,33z M21,22 h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844 C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"></path>
                                    </svg>
                                    <p className='text-white uppercase font-semibold'>btc</p>
                                </div>
                                <span className='text-upcolor rounded-md bg-emerald-100 px-1 text-center py-[1px] text-[12px] font-medium'><RiArrowDropUpFill className='inline-block' />6.7%</span>
                            </div>
                            <p className='text-slate-100 font-medium pt-2 ps-1.5'>$ 42,964.78</p>
                        </div>
                        <div className='py-4 border-b-2 border-slate-50/25'>
                            <div className='flex justify-between items-center'>
                                <div className='inline-flex flex-wrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 100 100">
                                        <path d="M84.528,47.483L57.035,7.317C55.821,5.548,54.145,4,52,4c-2.147,0-4.153,1.059-5.363,2.829 L19.144,46.99c-1.038,1.516-1.387,3.41-0.954,5.21c0.356,1.463,1.215,2.743,2.398,3.639c-0.947,2.084-0.752,4.546,0.662,6.489 l25.502,35.008C47.972,99.004,49.934,100,52,100c2.069,0,4.033-0.999,5.253-2.671l25.511-35c1.417-1.943,1.611-4.411,0.658-6.501 c1.177-0.897,1.704-1.683,2.061-3.149C85.912,50.897,85.566,49.006,84.528,47.483z" opacity=".35"></path><path fill="#f2f2f2" d="M82.855,44.992L55.362,4.825C54.148,3.056,52.145,2,50,2c-2.147,0-4.153,1.059-5.363,2.829 L17.144,44.99c-1.038,1.516-1.387,3.41-0.954,5.21c0.356,1.463,1.215,2.743,2.398,3.639c-0.947,2.084-0.752,4.546,0.662,6.489 l25.502,35.008C45.972,97.004,47.934,98,50,98c2.069,0,4.033-0.999,5.253-2.671l25.511-35c1.417-1.943,1.611-4.411,0.658-6.501 c1.177-0.897,2.031-2.174,2.389-3.641C84.239,48.406,83.894,46.515,82.855,44.992z"></path><polygon fill="#9aa2e6" points="50,8.5 77.492,48.663 50,63.5 22.506,48.663"></polygon><polygon fill="#9aa2e6" points="50,70.5 75.511,56.5 50,91.5 24.503,56.5"></polygon><polygon fill="#707cc0" points="50,35 23,49 50,63 77,49"></polygon><polygon fill="none" stroke="#40396e" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="50,8.5 77.492,48.663 50,63.5 22.506,48.663"></polygon><polygon fill="#707cc0" points="73,59 50,91 50,70"></polygon><polygon fill="none" stroke="#40396e" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="50,70.5 75.511,56.5 50,91.5 24.503,56.5"></polygon><polygon fill="#40396e" points="77,48.404 50,63.404 50,9.404" opacity=".35"></polygon>
                                    </svg>
                                    <p className='text-slate-100 uppercase font-semibold'>Ethereum</p>
                                </div>
                                <span className='text-downcolor bg-red-100 px-1 text-center py-[1px] text-[12px] font-medium rounded-md'><RiArrowDropDownFill className='inline-block' />3.5%</span>
                            </div>
                            <p className='text-slate-100 font-medium pt-2 ps-1.5'>$ 33,700.25</p>
                        </div>
                        <div className='py-4 '>
                            <div className='flex justify-between items-center'>
                                <div className='inline-flex flex-wrap items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-5 h-5' viewBox="0 0 50 50">
                                        <path d="M 10.417969 5 L 2.0820312 22.949219 L 25 45 L 47.917969 22.949219 L 39.582031 5 L 10.417969 5 z M 12.957031 10.042969 L 36.957031 10.042969 L 37 16 L 28 16 L 28 19.490234 C 36.125 19.874234 39.582031 21.046969 39.582031 22.542969 C 39.582031 24.037969 34.551 25.694 28 26 L 28 37 L 22 37 L 22 26 C 15.449 25.694 10.417969 24.037969 10.417969 22.542969 C 10.417969 21.046969 13.875 19.749234 22 19.490234 L 22 16 L 13 16 L 12.957031 10.042969 z M 22 20.375 C 16.611 20.635 13 21.283 13 22.375 C 13 23.67 18.097 24.625 25 24.625 C 31.903 24.625 37 23.545 37 22.25 C 37 21.158 33.389 20.76 28 20.5 L 28 23 C 27 23.063 26.083 23.082031 25 23.082031 C 23.917 23.082031 23 23.062 22 23 L 22 20.375 z"></path>
                                    </svg>
                                    <p className='text-slate-100 uppercase font-semibold'>Tether</p>
                                </div>
                                <span className='text-downcolor bg-red-100 px-1 text-center py-[1px] text-[12px] font-medium rounded-md'><RiArrowDropDownFill className='inline-block' />5.7%</span>
                            </div>
                            <p className='text-slate-100 font-medium pt-2 ps-1.5'>$ 21,694.31</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Previewchart
