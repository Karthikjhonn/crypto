import React, { useEffect, useState } from 'react'
import News from './News'
import { useParams } from 'react-router-dom'
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import jsonData from '../jsonstore/news.json'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import Toast from '../popupmessage/Toast';


function Addwishlist() {
  window.scrollTo({
    top: 0,
})
  const [wishlist, setwishlist] = useState(false)

  // let postAdded = <Toast message={'Post added successfully'} openModel={900} closeModel={1000}/>
  // let postRemoved = <Toast message={'Post removed'} />

  function wishliststate(event) {
    if (event) {
      setwishlist(true)
    } else {
      setwishlist(false)
    }
  }

  return (
    <div>
      <div className='p-1 bg-black/50 rounded-full absolute top-4 right-2'>
        {wishlist ? <div><AiTwotoneHeart onClick={() => wishliststate(false)} className="cursor-pointer text-2xl text-red-600" /> </div> :<div><AiOutlineHeart onClick={() => wishliststate(true)} className='text-2xl cursor-pointer' /></div>}
      </div>
    </div>
  )
}



function Readblog() {
  const [imgsrc, setimgsrc] = useState(null)
  const [headline, setheadline] = useState(null)
  const [textcontent, settextcontent] = useState(null)

  var title = useParams();
  const data = jsonData.newsdata

  useEffect(() => {
    window.scrollTo({ top: 0, });
    data.map((data, i) => {
      if (i + 1 == title.id) {
        setimgsrc(data.image_url)
        setheadline(data.title)
        settextcontent(data.text)
      }
    })
  })

  const dateString = "Sun, 29 Oct 2023 07:53:32 -0400";
  // const date=  new Date(2023, 10, 4)
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const date = formatRelative(subDays(new Date(), randomNum), new Date())

  return (
    <section>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-2 container  justify-items-center'>
        <article className='md:col-span-2'>
          <div className='py-2.5 px-3.5 bg-gradient-to-tl from-slate-500 to-slate-800 sticky top-[60px] lg:hidden z-50' onClick={() => window.history.back()}><IoArrowBackOutline className='text-2xl ' /></div>
          <section className='p-4 py-0 md:py-10'>
            <div className='mx-auto max-w-3xl bg-[#202020] text-white  p-4 md:p-5 rounded-[20px]  mt-4 md:mt-0'>
              <div className='flex flex-col gap-2'>
                <div className='w-full relative'>
                  <img src={imgsrc} className='w-full rounded-[8px]' />
                  <Addwishlist />
                </div>
                <div className=''>
                  <h1 className='text-lg md:text-2xl pt-2 font-medium select-none'>{headline}</h1>
                  <p className='capitalize text-[8px] px-1.5 py-1 rounded-sm bg-[#0f0f0f] inline-block select-none'>{date}</p>
                  <p className='text-[14px] py-2.5'><span className='block pb-4 md:py-2.5 '>{textcontent}</span>In the world of finance and technology, cryptocurrencies have emerged as a groundbreaking innovation, redefining the way we think about money and transactions. Since the advent of Bitcoin in 2009, the cryptocurrency landscape has witnessed a remarkable evolution. Let's explore how cryptocurrencies have risen to prominence and their potential impact on the financial world..
                    <span className=''>It all began with the mysterious figure known as Satoshi Nakamoto, who introduced the concept of Bitcoin through a whitepaper published in January 2009. Bitcoin represented a radical departure from traditional currency systems. It was designed as a decentralized, peer-to-peer digital currency, aiming to eliminate the need for intermediaries like banks and governments in financial transactions.</span>
                    <span className='py-4 md:py-2.5 block'>At the heart of cryptocurrencies is the blockchain technology. Blockchain is a distributed ledger that records all transactions across a network of computers. This technology ensures transparency, security, and immutability of transaction data. It has applications far beyond cryptocurrencies, including supply chain management, voting systems, and more.</span>
                    While Bitcoin led the way, a plethora of alternative cryptocurrencies, known as altcoins, emerged. Litecoin, Ethereum, Ripple, and many others offered unique features and use cases. Ethereum, for instance, introduced smart contracts, self-executing contracts with predefined rules, which opened the door to decentralized applications (DApps).<span>With the growth of cryptocurrencies came challenges. Regulatory bodies worldwide became concerned about fraud, money laundering, and consumer protection. Some countries embraced cryptocurrencies, while others imposed strict regulations or bans. Security breaches and scams also plagued the industry, leading to a growing emphasis on cybersecurity.</span>
                    <span>The year 2017 marked a turning point when Bitcoin's price surged, reaching an all-time high. This brought cryptocurrencies to the mainstream, attracting investors and speculators. As the market grew, so did the number of initial coin offerings (ICOs), a fundraising method for new projects.</span>
                    <span className='py-4 md:py-2.5 block'>Institutional investors have increasingly entered the cryptocurrency space, giving it more legitimacy. Well-known companies, such as Tesla and Square, have added Bitcoin to their balance sheets. Moreover, the introduction of Bitcoin futures and exchange-traded funds (ETFs) has provided traditional investment avenues for cryptocurrencies.</span>
                    The future of cryptocurrencies remains uncertain, as they continue to disrupt traditional finance. DeFi platforms are transforming lending and borrowing, NFTs are changing how we view ownership of digital assets, and central bank digital currencies (CBDCs) are being explored by governments. The role of cryptocurrencies in the global financial system is still unfolding.

                    In conclusion, cryptocurrencies have come a long way since the inception of Bitcoin. They represent a technological revolution with the potential to reshape finance and beyond. However, as they continue to evolve, it's essential to address the challenges and uncertainties they present. The story of cryptocurrencies is one of innovation, disruption, and the pursuit of financial freedom.
                    <span className='block'>Cryptocurrencies, once a niche interest among tech enthusiasts, have now become a global phenomenon that is reshaping the financial landscape. The journey of cryptocurrencies, which began with the inception of Bitcoin in 2009, has been nothing short of revolutionary. In this article, we'll explore the evolution of cryptocurrencies, from the emergence of Bitcoin to the rise of decentralized finance (DeFi) and beyond.

                      The Birth of Bitcoin:

                      In January 2009, an anonymous figure known as Satoshi Nakamoto introduced the world to Bitcoin, a decentralized digital currency that operated on a groundbreaking technology called blockchain. Bitcoin's core principles included decentralization, transparency, and security. It was designed to eliminate the need for intermediaries like banks and provide users with greater control over their finances.</span>
                    In conclusion, cryptocurrencies have come a long way since the inception of Bitcoin. They represent a technological revolution with the potential to reshape finance and beyond. However, as they continue to evolve, it's essential to address the challenges and uncertainties they present. The story of cryptocurrencies is one of innovation, disruption, and the pursuit of financial freedom.

                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
        <div className='mx-auto p-4'>
          <News gridclass={'grid grid-cols-1 gap-y-4 md:gap-4'} gridNewsFeedClass={'content-start bg-gradient-to-t from-half-black via-[#212121] to-half-black p-2 rounded-[12px] md:p-4'}/>
        </div>
      </section>
    </section>
  )
}

export default Readblog
