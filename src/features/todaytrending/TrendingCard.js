import React, { useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import Previewchart from './Previewchart'

function TrendingCard() {
  const [toggle, settoggle] = useState(true)
  function toggleBtn() {
    if (toggle) {
      settoggle(false)
    } else if (!toggle) {
      settoggle(true)
    }
  }
  const toggleActive = toggle ? "md:w-[65px] md:h-[35px] w-[52px] h-[26px]  bg-blue-600 rounded-full relative" : "md:w-[65px] md:h-[35px] w-[52px] h-[26px] bg-gray-200 rounded-full relative"
  const toggleActiveSmall = toggle ? 'md:w-6 md:h-6 md:right-2 w-4 h-4 rounded-full bg-white absolute top-1/2 right-2 transition-all duration-500 ease-in-out -translate-y-1/2' : 'md:w-6 md:h-6 md:right-8 w-4 h-4 rounded-full bg-blue-600 absolute top-1/2 md:right-10 right-7 transition-all duration-500 ease-in-out -translate-y-1/2'

  const trendingStaticData = [
    {
      "id": "amaterasu-omikami",
      "coin_id": 31821,
      "name": "AMATERASU OMIKAMI",
      "symbol": "OMIKAMI",
      "market_cap_rank": 710,
      "thumb": "https://assets.coingecko.com/coins/images/31821/thumb/Omikami_BTC_AMZN.png?1696530635",
      "small": "https://assets.coingecko.com/coins/images/31821/small/Omikami_BTC_AMZN.png?1696530635",
      "large": "https://assets.coingecko.com/coins/images/31821/large/Omikami_BTC_AMZN.png?1696530635",
      "slug": "amaterasu-omikami",
      "price_btc": 5.653856754376519e-7,
      "score": 0
    },
    {
      "id": "bella-protocol",
      "coin_id": 12478,
      "name": "Bella Protocol",
      "symbol": "BEL",
      "market_cap_rank": 477,
      "thumb": "https://assets.coingecko.com/coins/images/12478/thumb/Bella.png?1696512296",
      "small": "https://assets.coingecko.com/coins/images/12478/small/Bella.png?1696512296",
      "large": "https://assets.coingecko.com/coins/images/12478/large/Bella.png?1696512296",
      "slug": "bella-protocol",
      "price_btc": 0.000021284624749784402,
      "score": 1
    },
    {
      "id": "trust-wallet-token",
      "coin_id": 11085,
      "name": "Trust Wallet",
      "symbol": "TWT",
      "market_cap_rank": 93,
      "thumb": "https://assets.coingecko.com/coins/images/11085/thumb/Trust.png?1696511026",
      "small": "https://assets.coingecko.com/coins/images/11085/small/Trust.png?1696511026",
      "large": "https://assets.coingecko.com/coins/images/11085/large/Trust.png?1696511026",
      "slug": "trust-wallet-token",
      "price_btc": 0.000032880283989059133,
      "score": 2
    }
  ]
  const trendingPosts = trendingStaticData.map((data,index) => {
    return (
      <div className='max-w-xs min-w-fit md:min-w-min  border rounded-3xl w-full h-full relative' key={index}>
        <img src='https://media.istockphoto.com/id/1463455851/photo/cryptocurrency-market-financial-data-and-candlesticks-internet-banking.webp?b=1&s=612x612&w=0&k=20&c=7biQCII2jLj3YEHT-9ANIDbVXWJB3oO-l1ILaSfABcc=' className='object-contain w-full h-full rounded-3xl'></img>

        <div className='font-semibold text-xl text-slate-200 absolute bottom-3 px-4 flex items-center gap-2 justify-between w-full'>
          <p>{data.name.substring(0, 10) + '...'}</p>
          <div className='flex items-center gap-1 bg-emerald-200/25 p-1 rounded-full'>
            <FiTrendingUp className='text-upcolor' />
            <small className='text-upcolor font-medium text-sm'>{data.market_cap_rank}+</small>
          </div>
        </div>
        <div className='w-12 h-12 rounded-full absolute top-3 right-3'>
          <img src={data.small} className='rounded-full w-full h-full object-contain' />
        </div>
      </div>
    )
  })

  return (
    <section className='py-2.5'>
      {/* toggle btn  */}
      <div className='py-2.5 px-2.5 items-center flex justify-between'>
        <p className='font-semibold text-2xl text-slate-500 capitalize underline'>top trends</p>
        <div className={toggleActive} onClick={toggleBtn} style={{ cursor: 'pointer' }}>
          <div className={toggleActiveSmall} ></div>
        </div>
      </div>
      {/* Trending posts  */}
      <div>
        {toggle ? (<div className=' my-4 w-full flex items-center gap-4 overflow-x-auto'>{trendingPosts}</div>) : <></>}
      </div>
    </section>
  )
}

export default TrendingCard

