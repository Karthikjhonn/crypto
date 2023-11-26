import React from 'react'
import { CiShare1 } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';




function Blog({ index, newsurl, title, text, source, imgsrc, label }) {

    const labelpost = label.map((data, i) => {
        return (
            <div key={i} className='bg-[#202020] px-3 py-1 rounded-full text-[12px]'>{data}</div>
        )
    })

    const blogPosts = "test"
    return (
        <section className='select-none'>
            <div className='py-4 mx-auto max-w-5xl'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <NavLink to={`/readblog/${index}/${title}`} >
                        <div className='relative'>
                            <img src={imgsrc} className='object-contain rounded-[2px] w-full h-full' alt='news image' />
                        </div>
                    </NavLink>
                    <div className='md:col-span-2'>
                        <a target='_blank' href={newsurl}>
                            <h1 className='text-[18px] font-medium py-0'>{title}</h1>
                        </a>
                        <NavLink to={`/readblog/${index}/${title}`}>
                            <p className='text-[14px] text-slate-300/75 min-h-11 h-11 max-h-16 overflow-clip font-light md:hidden'>{text.substring(0,75)+"..."}<span className='text-[12px] font-medium text-blue-500 px-1'>Read more</span></p>
                            <p className='text-[14px] text-slate-300/75 min-h-11 h-11 max-h-16 overflow-clip font-light md:block hidden lg:hidden'>{text.substring(0,115)+"..."}<span className='text-[12px] font-medium text-blue-500 px-1'>Read more</span></p>
                            <p className='text-[14px] text-slate-300/75 min-h-11 h-11 max-h-16 overflow-clip font-light lg:block hidden'>{text.substring(0,130)+"..."}<span className='text-[12px] font-medium text-blue-500 px-1'>Read more</span></p>
                        </NavLink>
                        
                        <div className='flex flex-col gap-1.5'>
                            <div><a href={newsurl} target='_blank' className='inline-flex gap-1 items-center font-[400] text-[15px] text-half-white hover:text-blue-500'><CiShare1 className="font-medium" />{source}</a></div>
                            <div className='flex gap-2 items-center'>
                                {labelpost}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
