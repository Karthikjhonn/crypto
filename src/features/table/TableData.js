import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import jsonData from '../jsonstore/market.json'
import Tablerow from './Tablerow';
function Datatable() {
    const [search, setsearch] = useState('')
    const [showmore, setshowmore] = useState(false)

    function activeShowmore(){
        if(showmore){
            setshowmore(false)
        }else if(!showmore){
            setshowmore(true)
        }
    }
    // console.log(jsonData.items);
    const item = jsonData.items
    let filteredData;

    let tableData;

    tableData = item.map((data, index) => {
        return (
            // <div className='shadow-lg rounded-sm border border-gray-200 py-2.5'>
            //     <table class="table-auto w-full">
            //         <thead className='text-xs font-medium uppercase text-gray-400 bg-gray-50'>
            //             <tr className=''>
            //                 <th></th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>#</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>name</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>rank</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>baseSymbol</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>quoteSymbol</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>price USD</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>priceQuote</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>tradesCount24Hr</th>
            //                 <th className='whitespace-nowrap text-left py-2.5'>updated</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr key={index ? index : 1}>
            //                 <td className=''>@</td>
            //                 <td className=''>{data.index ? index : 1}</td>
            //                 <td className=''>{data.exchangeId}</td>
            //                 <td className=''>{data.rank}</td>
            //                 <td className=''>{data.baseSymbol}</td>
            //                 <td className=''>{data.quoteSymbol}</td>
            //                 <td className=''>{data.priceUsd}</td>
            //                 <td className=''>{data.priceQuote}</td>
            //                 <td className=''>$ {data.tradesCount24Hr}</td>
            //                 <td className=''>{data.updated}</td>
            //             </tr>
            //         </tbody>
            //     </table>
            // </div>

            <Tablerow data={data} index={index} />
        )
    })

    if (search) {
        filteredData = item.filter((data) => data.quoteId.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        tableData = filteredData.map((data, index) => {
            if (filteredData.length > 2) {
                console.log("pass");
                return (
                    <Tablerow data={data} index={index} />
                )
            }
        })
    }

    return (
        <div>
            <br />
            <div className="w-full max-w-7xl mx-auto bg-[#fcfcfc] shadow-lg rounded-sm border border-[#eeeeee] ">
                <header className="px-2 md:px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className='relative border p-2 rounded-sm w-full max-w-2xl'>
                        <input type='text' placeholder='search' className='placeholder:text-gray-200 focus:outline-none h-full w-full' onChange={(e) => setsearch(e.target.value)} />
                        <div className='absolute top-1/2 -translate-y-1/2 right-3'><FiSearch className='text-gray-200 w-5 h-5' /></div>
                    </div>
                    <button onClick={activeShowmore}  className='text-main capitalize font-semibold items-end gap-[1px] text-sm hidden md:flex'>see more <FiChevronRight className='font-semibold text-base mb-[1px]' /></button>
                </header>
                <div className="py-3">
                    <div className={showmore?'overflow-x-auto overflow-y-hidden':'overflow-x-auto max-h-96 overflow-y-hidden'}>
                        <table className="table-auto w-full ">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-semibold text-center">#</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">rank</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">baseSymbol</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">quoteSymbol</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">price USD</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">priceQuote</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">tradesCount24Hr</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">updated</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100 ">
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div><button onClick={activeShowmore}  className='text-main capitalize font-semibold items-end gap-[1px] text-sm md:hidden flex my-2.5 ms-auto px-1'>see more <FiChevronRight className='font-semibold text-base mb-[1px]' /></button></div>
            </div>
        </div>
    )
}

export default Datatable
