import React, { useEffect, useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { sellectAllpost, ApiStatus, error, fetchPost, } from './trendingcoinslice';

function TrendingCard() {
  const apiStatus = useSelector(ApiStatus);
  const allpost = useSelector(sellectAllpost);
  const Error = useSelector(error);

  const dispatch = useDispatch()
  useEffect(() => {
    if (apiStatus == "idle") {
      dispatch(fetchPost());
    };
  }, [dispatch, apiStatus]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [toggle, settoggle] = useState(true);

  function toggleBtn() {
    if (toggle) {
      settoggle(false)
    } else if (!toggle) {
      settoggle(true)
    }
  };

  const toggleActive = toggle ? 'pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-blue-600 ring-black/20 lg:me-4' : 'pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-300 ring-black/20 lg:me-4'
  const toggleActiveSmall = toggle ? 'h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4' : 'h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x[-2px]'
  const trendingStaticData = [
    {
      "id": "more-loot",
      "name": "More Loot",
      "symbol": "mloot",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/435/small/mloot.png?1656678281",
      "nft_contract_id": 435,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 0.29,
      "floor_price_24h_percentage_change": 14374.3648982533
      },
      {
      "id": "impostors-genesis-aliens",
      "name": "Impostors Genesis Aliens",
      "symbol": "IMPOSTORS",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/295/small/impostors-genesis-aliens.gif?1648976566",
      "nft_contract_id": 295,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 0.8096633473125778,
      "floor_price_24h_percentage_change": 66.0613253806495
      },
      {
      "id": "creepz-genesis",
      "name": "Creepz by OVERLORD",
      "symbol": "CBC",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/1326/small/creepz-genesis.png?1661231657",
      "nft_contract_id": 1326,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 2.354659077367632,
      "floor_price_24h_percentage_change": 46.8606754726312
      },
      {
      "id": "azra-games-the-hopeful",
      "name": "Azra Games - The Hopeful",
      "symbol": "HOPE",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/2094/small/azra-games-the-hopeful.gif?1664777592",
      "nft_contract_id": 2094,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 0.5964929558069176,
      "floor_price_24h_percentage_change": 26.5973158685571
      },
      {
      "id": "treeverse-plots",
      "name": "Treeverse Plots",
      "symbol": "TREEVERSE-PLOTS",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/266/small/treeverse-plots.png?1644418017",
      "nft_contract_id": 266,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 0.527653995647803,
      "floor_price_24h_percentage_change": 22.5899743292985
      },
      {
      "id": "nftrees",
      "name": "NFTrees",
      "symbol": "TREE",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/939/small/nftrees.png?1657966105",
      "nft_contract_id": 939,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 6.9,
      "floor_price_24h_percentage_change": 16.7577631418807
      },
      {
      "id": "pixels-farm-land",
      "name": "Pixels - Farm Land",
      "symbol": "FARM",
      "thumb": "https://assets.coingecko.com/nft_contracts/images/2119/small/pixels-farm-land.png?1666668005",
      "nft_contract_id": 2119,
      "native_currency_symbol": "eth",
      "floor_price_in_native_currency": 0.7999997411997386,
      "floor_price_24h_percentage_change": 15.9994889909972
      }
  ]
  var imageSrc = [
    require("../../images/slider/slide1.png"),
    require("../../images/slider/slide2.png"),
    require("../../images/slider/slide3.png"),
    require("../../images/slider/slide4.png"),
    require("../../images/slider/slide5.png"),
    require("../../images/slider/slide6.png"),
    require("../../images/slider/slide7.png")
  ]
  let trendingPosts;
  if (allpost != null) {
    trendingPosts = allpost.map((data, index) => {
      return (
        <div className='  md:min-w-min  border border-gray-100/25 rounded-[12px]  w-full h-full relative' key={index}>
          <img src={imageSrc[index]} className='object-contain w-full h-full rounded-[12px]' alt='slider image'></img>
          <div className='font-normal text-base text-white absolute bottom-3 px-4 flex items-center gap-2 justify-between w-full'>
            <p className='md:hidden'>{data.name.substring(0, 10) + '..'}</p>
            <p className='hidden md:block'>{data.name.substring(0, 20)}</p>
            <p className='capitalize'>sign : {data.native_currency_symbol.substring(0, 8)}</p>
          </div>
          <div className='w-full absolute top-3 left-0 px-2.5'>
            <div className='flex justify-between items-center'>
              <div className=' w-12 h-12 rounded-full'>
                <img src={data.thumb} className='rounded-full w-full h-full object-contain' />
              </div>
              <div className='flex items-center gap-1 bg-emerald-200/25 px-2 py-1 rounded-full'>
                <FiTrendingUp className='text-upcolor text-[16px]' />
                <small className='text-upcolor font-medium text-[12px]'>{data.floor_price_in_native_currency.toString().substring(0, 4)}+</small>
              </div>
            </div>
          </div>
        </div>
      )
    })
  };

  if (Error || apiStatus == "loading") {
    trendingPosts = trendingStaticData.map((data, index) => {
      return(
        <div className='flex items-center gap-4' key={index}>
          <div className='  md:min-w-min bg-[#1e1e1e] border border-gray-100/25 rounded-[12px]  w-full h-56 p-4 relative animate-pulse'>
            <div className='flex justify-between items-center'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#353535]'> </div>
              <div className='w-12 h-4 rounded-full bg-[#353535]'></div>
            </div>
            <div className='flex justify-between items-center absolute bottom-6 w-full left-0 px-4'>
              <div className='w-1/2 h-4 rounded-full bg-[#353535]'></div>
              <div className='w-1/4 h-4 rounded-full bg-[#353535]'></div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section className='py-2.5'>
      {/* toggle btn  */}
      <div className='py-2.5 items-center flex justify-between '>
        <p className='font-semibold text-white capitalize md:px-4'>top trends</p>
        <div className={toggleActive} onClick={toggleBtn} style={{ cursor: 'pointer' }}>
          <div className={toggleActiveSmall} ></div>
        </div>
      </div>
      {/* Trending posts  */}
      <div>
        {toggle ? (<div className='my-4'><Slider {...settings}>{trendingPosts}</Slider></div>) : <></>}
      </div>

    </section>
  )
}

export default TrendingCard

