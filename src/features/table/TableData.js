import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import jsonData from '../jsonstore/market.json'
import Tablerow from './Tablerow';
import { useSelector,useDispatch } from 'react-redux';
import { sellectAllpost,apiStatus,error, fetchpost } from './tabledataslice';

function Datatable() {
    const ApiStatus = useSelector(apiStatus);
    const Allpost = useSelector(sellectAllpost);
    const Errormsg = useSelector(error);
    const dispatch = useDispatch();
    console.log("hi");
    // console.log(Allpost);
    // console.log(ApiStatus);
    useEffect(()=>{
        if(ApiStatus =="idle"){
            dispatch(fetchpost())
        }
        console.log("useeffect call");
    },[dispatch,apiStatus]);
    // if(ApiStatus =="idle"){
    //     dispatch(fetchpost())
    // }
    console.log("hello");
    
    const [search, setsearch] = useState('')
    const [showmore, setshowmore] = useState(false)

    function activeShowmore() {
        if (showmore) {
            setshowmore(false)
        } else if (!showmore) {
            setshowmore(true)
        }
        // window.scrollBy({
        //     top: 400,
        //     behavior: 'smooth'
        // });
    }
    // console.log(jsonData.items);
    const item = jsonData.items
    // const item = []
    let filteredData;

    let tableData;

    if (Allpost.length != 0) {
        tableData = Allpost.map((data, index) => {
            return (
                <Tablerow data={data} index={index} key={index} />
            )
        })
    } else {
        tableData = <tr className='bg-gradient-to-b from-gray-900 via-[#1C1C1C]/25 to-[#202020]   h-96 '>
            <td colSpan="9" className='text-red-600 col-span-3 text-center py-4 w-full h-full'>sorry. something went wrong. please try after sometime</td>
        </tr>
    }

    if (search) {
        filteredData = Allpost.filter((data) => data.quoteId.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        if (filteredData.length != 0) {
            tableData = filteredData.map((data, index) => {
                if (filteredData.length > 2) {
                    return (
                        <Tablerow data={data} index={index} key={index} />
                    )
                }
            })
        } else {
            tableData = <tr className='h-[45rem] bg-gradient-to-t from-[#302C2C]/25 to-[#121212]'>
                <td colSpan="9" className='w-full h-full '>
                    <div className='max-w-sm mx-auto'>
                        <img src={require('../../images/resultnotfound1.png')} className='aspect-square' alt='image error' />
                    </div>
                    <center className='capitalize text-white text-[14px] font-light'>We're sorry, but it seems that no results match your query. <br /> Please double-check your search terms or try a different search.</center>
                </td>
            </tr>
        }
    }

    return (
        <div className=''>
            <br />
            <div className="w-full max-w-7xl mx-auto bg-half-black shadow-lg rounded-[5px] border border-gray-100/25 ">
                {/* search field  */}
                <header className="px-2 md:px-5 py-4 border-b border-gray-100/25 flex items-center justify-between">
                    <div className='relative bg-[#2C2C2C] p-2 rounded-[8px] w-full md:max-w-xl xl:max-w-2xl text-white'>
                        <input type='text' placeholder='search' className='placeholder:text-half-white focus:outline-none h-full w-full bg-inherit' onChange={(e) => setsearch(e.target.value.trim())} />
                        <div className='absolute top-1/2 -translate-y-1/2 right-3'><FiSearch className='text-gray-200 w-5 h-5' /></div>
                    </div>
                    <button onClick={activeShowmore} className={showmore ? 'text-white/25 border border-half-white/25 hover:border-half-white/50 rounded-sm px-2 py-1 whitespace-nowrap capitalize font-light items-end gap-[1px] text-sm hidden md:flex' : 'text-white border border-half-white/25 hover:border-half-white/50 rounded-sm px-2 py-1 whitespace-nowrap capitalize font-light items-end gap-[1px] text-sm hidden md:flex'}>view more <FiChevronRight className='hidden font-semibold text-base mb-[1px]' /></button>
                </header>
                <div className="py-3">
                    <div className={showmore ? 'overflow-x-auto overflow-y-hidden' : 'overflow-x-auto  max-h-[45rem] overflow-y-hidden'}>
                        <table className="table-auto w-full ">
                            <thead className="text-xs font-[300] uppercase text-white bg-[#2F2F2F]">
                                <tr>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-[300] text-center">#</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">rank</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">baseSymbol</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">quoteSymbol</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">price USD</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">priceQuote</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">tradesCount24Hr</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-[300] text-left">updated</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100/25 ">
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* small device */}
                <div><button onClick={activeShowmore} className={showmore ? 'text-white/50 capitalize font-normal border border-gray-50/25 items-end gap-[1px] text-sm md:hidden flex my-2.5 me-2 ms-auto px-2 py-1' : 'text-white capitalize font-normal border border-gray-50/25 items-end gap-[1px] text-sm md:hidden flex my-2.5 me-2 ms-auto px-2 py-1'}>view more <FiChevronRight className='font-semibold text-base mb-[1px] hidden' /></button></div>
            </div>
        </div>
    )
}

export default Datatable
