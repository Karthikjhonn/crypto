import React from 'react'
import ProfileNav from './ProfileNav';
import Datatable from '../table/TableData';
import Previewchart from '../todaytrending/TrendingCard';
import TrendingCard from '../todaytrending/Previewchart';
function Market() {
    return (
        <main className=' w-full py-4 px-4 container mx-auto'>
            <ProfileNav />
            <div className='py-6'>
                <h1 className='md:text-2xl text-lg font-semibold '>Today's Cryptocurrency Prices by Market Cap</h1>
                <p className='text-gray-400'>The global crypto market cap is $1.11T, a <span className='text-upcolor'>2.61%</span> increase over the last day.<a href='#' className='underline text-blue-500 block md:inline-block md:ms-2'>Read More</a></p>
            </div>
            <TrendingCard />
            <Previewchart />
            <Datatable />
        </main>
    )
}

export default Market
