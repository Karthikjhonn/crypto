import React, { useState } from 'react'
import Blog from './Blog'
import jsonData from '../jsonstore/news.json'

function Newscomponent() {
    const [overlay, setoverlay] = useState(true)
    setTimeout(() => setoverlay(false), 1500);
    const data = jsonData.newsdata

    const blogPost = data.map((data, index) => {
        return (
            <Blog key={index} index={index + 1} newsurl={data.news_url} title={data.title} text={data.text} source={data.source_name} imgsrc={data.image_url} label={data.tickers} />
        )
    })
    return (
        <div className='max-w-4xl mx-auto py-10  p-4 md:py-10'>
            <div>
                <h1 className='text-lg font-semibold  md:text-2xl'>News</h1>
                <p className='text-gray-200'>Insights into the biggest events shaping the crypto industry.</p>
            </div>
            <div className='py-4'>
                {blogPost}
            </div>
            {overlay ?
                <div className='fixed top-0 left-0 h-screen bg-black w-full py-24 px-4 md:hidden '>
                    <div className='animate-pulse'>
                        <div className='w-24 bg-[#1e1e1e] h-6 mb-4 rounded-sm'></div>
                        <div className='w-full bg-[#202020] h-6 rounded-sm'></div>
                        <div className='w-full h-44 bg-[#121212] mt-8 mb-2 rounded-md'></div>
                        <div className='w-10/12 bg-[#1e1e1e] h-4 mb-2.5 rounded-sm'></div>
                        <div className='w-full bg-[#202020] h-4 mb-2.5 rounded-sm'></div>
                        <div className='w-1/2 bg-[#202020] h-4 mb-2.5 rounded-sm'></div>
                        <div className='w-12 rounded-full inline-block bg-[#202020] h-4'></div>
                        <div className='w-12 rounded-full inline-block ms-2.5 bg-[#202020] h-4'></div>
                    </div>
                </div>
                : <></>}
        </div>
    )
}

export default Newscomponent
