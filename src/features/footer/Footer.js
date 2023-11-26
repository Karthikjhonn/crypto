import React from 'react'
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BiLogoGmail } from 'react-icons/bi';
import { LiaCopyrightSolid } from 'react-icons/lia';



function Footer() {
    function Quicklink(params) {

        return (
            <ul>
                <li className='text-half-white font-normal'>{params.heading}</li>
                <div className='pt-1'>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link1}</li>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link2}</li>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link3}</li>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link4}</li>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link5}</li>
                    <li className='text-half-white/75 text-[13px] hover:text-white hover:underline pt-1 font-light capitalize cursor-pointer'>{params.link6}</li>
                </div>
            </ul>
        )
    }
    return (
        <footer className='border-t  border-gray-50/25'>
            <div className='container mx-auto p-4 py-6 md:py-10 '>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-3'>
                    <div className='md:col-span-12 lg:col-span-4'>logo</div>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <Quicklink heading={'Products'} link1={'Crypto Indices'} link2={'Blockchain Explorer'} link3={"Crypto API"} link4={'Doodles'} link5={'Sitemap'} />
                    </div>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <Quicklink heading={'About us'} link1={'Terms of use'} link2={'Privacy Policy '} link3={"Cookie preferences "} link4={'Community Rules'} link5={'Disclaimer'} />
                    </div>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <Quicklink heading={'support'} link1={'Request Form'} link2={'Contact Support'} link3={"FAQ"} />
                    </div>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <p className='text-half-white font-normal'>socials</p>
                        <div className='flex items-center gap-1.5 pt-1 '>
                            <BiLogoGmail className='cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-300 ease-in-out' />
                            <TiSocialFacebook className='cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-300 ease-in-out' />
                            <TiSocialTwitter className='cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-300 ease-in-out' />
                            <SlSocialVkontakte className='cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-300 ease-in-out' />
                        </div>
                    </div>
                </div>
                <center className='pt-6 text-[14px] font-extralight text-white flex items-center justify-center gap-1 lg:pt-16'> <LiaCopyrightSolid className='text-[13px]' /> 2023 AltZone.  All rights reserved</center>
            </div>
        </footer>
    )
}

export default Footer
