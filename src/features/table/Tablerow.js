import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { BiTrendingUp } from "react-icons/bi";

function Tablerow({ data, index }) {
    const upvalue = Math.ceil(data.priceUsd)
    const downvalue = Math.floor(data.updated % 2)

    return (
        <>
            <tr key={index} className='hover:bg-[#f6f6f8fa] transition-all duration-75 ease-in-out'>
                <td className="p-2 whitespace-nowrap text-center"><AiFillStar className='text-yellow-500' /></td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-gray-600 capitalize">{data.quoteId}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{index+1}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-main">{data.baseSymbol}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{data.quoteSymbol}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    {upvalue >= 5 ? <div className="text-left text-upcolor flex items-center">{data.priceUsd}<HiOutlineArrowSmUp /></div> : <div className="text-left text-downcolor flex items-center">{data.priceUsd}<HiOutlineArrowSmDown /></div>}
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{data.priceQuote.substring(0, 8) + '...'}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-gray-500 flex items-center justify-center gap-1">{data.tradesCount24Hr ? <>{data.tradesCount24Hr} {data.tradesCount24Hr > 100 ? <BiTrendingUp className='text-upcolor' />: ''} </> : '-'}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    {downvalue == 0 ? <div className="text-left text-upcolor flex items-center">{data.priceQuote}<HiOutlineArrowSmUp /></div> : <div className="text-left text-downcolor flex items-center">{data.priceQuote}<HiOutlineArrowSmDown /></div>}
                    {downvalue == 0 ? <div className="text-left text-downcolor flex items-center">{data.updated}<HiOutlineArrowSmDown /></div> : <div className="text-left text-upcolor flex items-center">{data.updated}<HiOutlineArrowSmUp /></div>}
                </td>
            </tr>
        </>
    )
}

export default Tablerow
