import React from 'react'

function NewsFeed(data) {
    return (
        <div className='flex gap-2 max-w-sm items-start hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-pointer border-b border-slate-50/25 py-2'>
            <div className='md:w-[200px] w-full max-w-[70px] min-w-[70px]  h-full'>
                <img src={data.data.urlToImage} className='object-cover rounded-sm w-full h-full' alt='News' />
            </div>
            <div>
                <h1 className='capitalize text-[14px] font-medium'>{data.data.author}</h1>
                <p className='text-[12px] text-slate-100 font-light text-justify h-9 truncate whitespace-normal text-ellipsis '>{data.data.title}</p>
            </div>
        </div>
    )
}

function VideoBite() {
    return (
        <div className="relative grid md:h-[35rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Trading with Precision, Profits with Vision
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
                    Tania Andrew
                </h5>
                <img
                    alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                />
            </div>
        </div>
    )
}

const newsThumbnail = [
    require("../../images/news/news1.png"),
    require("../../images/news/news2.png"),
    require("../../images/news/news3.png"),
    require("../../images/news/news4.png"),
    require("../../images/news/news5.png"),
    require("../../images/news/news6.png"),
]
const newspost = [
    {
        "source": {
            "id": null,
            "name": "Motor.ru"
        },
        "author": "Анастасия Мельник",
        "title": "Для Tesla Cybertruck разработали уникальную медиасистему: первые фото",
        "description": "Для Tesla Cybertruck разработали уникальную медиасистему: первые фото. До этого ни одну из моделей американского автопроизводителя не оборудовали подобным информационно-развлекательным комплексом. Вдобавок, на инсайдерских изображениях можно рассмотреть элеме…",
        "url": "https://motor.ru/news/cybertruck-interior-24-11-2023.htm",
        "urlToImage": "https://motor.ru/imgs/2023/11/24/16/6242131/ceeb47d0799a85db3a5edabadedbffc3ed8688a4.jpg",
        "publishedAt": "2023-11-25T06:09:00Z",
        "content": ", Tesla Cybertruck . , . , . ."
    },
    {
        "source": {
            "id": null,
            "name": "Corriere.it"
        },
        "author": "Federico Rampini",
        "title": "Meno investimenti, dominio cinese: perché sta rallentando la nostra transizione green",
        "description": "Solare, eolico, auto elettrica: la crisi è generale",
        "url": "https://www.corriere.it/esteri/23_novembre_25/meno-investimenti-dominio-cinese-perche-sta-rallentando-nostra-transizione-green-a89dcc06-8b6b-11ee-a024-cf804db2e6bb.shtml",
        "urlToImage": "https://images2.corriereobjects.it/methode_image/socialshare/2023/11/25/b95c949c-8b6f-11ee-a024-cf804db2e6bb.jpg",
        "publishedAt": "2023-11-25T08:54:44Z",
        "content": "Questo testo è tratto dalla newsletter Global, di Federico Rampini, riservata agli abbonati del Corriere: la si può ricevere gratis per 30 giorni cliccando qui.\r\nSi apre in un contesto difficile la p… [+7906 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CleanTechnica"
        },
        "author": "Zachary Shahan",
        "title": "Did Cruise Just Take On Too Much Risk?",
        "description": "We’ve been discussing Cruise and robotaxis for weeks following the unfortunate death of a pedestrian in San Francisco. It was ... [continued]\nThe post Did Cruise Just Take On Too Much Risk? appeared first on CleanTechnica.",
        "url": "https://cleantechnica.com/2023/11/25/did-cruise-just-take-on-too-much-risk/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/11/Criuse-poops-itself.png",
        "publishedAt": "2023-11-25T08:29:00Z",
        "content": "We’ve been discussing Cruise and robotaxis for weeks following the unfortunate death of a pedestrian in San Francisco. It was a pedestrian who was first hit by a car next to a Cruise robotaxi, but we… [+3288 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Feber.se"
        },
        "author": "Frode Wikesjö",
        "title": "iFixit har skruvat isär en Steam Deck OLED",
        "description": "Och Digital Foundry tar en titt på prestandan\n\n\n\n\n\n\n\n\n\n\nFolket från iFixit har plockat isär en Steam Deck OLED för att ta sig en närmare titt på enhetens olika komponenter samt för att se om den är något man kan reparera på egen hand eller ej. De noterar blan…",
        "url": "https://feber.se/spel/ifixit-har-skruvat-isar-en-steam-deck-oled/458714/",
        "urlToImage": "https://i.ytimg.com/vi/fhUqh-RkqEU/hqdefault.jpg",
        "publishedAt": "2023-11-25T06:00:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+33988 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "mobiFlip.de"
        },
        "author": "René Hesse",
        "title": "Tesla Model 3 „Highland“: Das sind die Änderungen unter dem Blech",
        "description": "Tesla präsentierte in diesem Jahr das neue Model 3 „Highland“ und seitdem das Fahrzeug ausgeliefert wird, gibt es immer mehr Details zu den Änderungen. In diesem Zusammenhang sei euch ein Video empfohlen.",
        "url": "https://www.mobiflip.de/shortnews/tesla-model-3-highland-das-sind-die-aenderungen-unter-dem-blech/",
        "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/09/tesla-model-3-2023-heck-header.jpg",
        "publishedAt": "2023-11-25T08:09:24Z",
        "content": "Tesla präsentierte in diesem Jahr das neue Model 3 Highland und seitdem das Fahrzeug ausgeliefert wird, gibt es immer mehr Details zu den Änderungen.\r\nIn diesem Zusammenhang sei euch ein Video empfoh… [+626 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Bloomberg",
        "title": "College dropouts who weathered crypto’s crash see promise ahead",
        "description": "He found success as a freelancer using Solidity, a programming language for creating “smart” blockchain contracts, and made about $300,000 in two years.",
        "url": "https://economictimes.indiatimes.com/markets/cryptocurrency/college-dropouts-who-weathered-cryptos-crash-see-promise-ahead/articleshow/105493018.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-105493018,width-1200,height-630,imgsize-1915340,overlay-etmarkets/photo.jpg",
        "publishedAt": "2023-11-25T08:07:28Z",
        "content": "When Carson Case, a computer science major, dropped out of the University of Nevada, Reno to pursue a crypto career in 2020, he didnt have much of a plan. The then-sophomore just knew he didnt want t… [+4300 chars]"
    },
]
function News({ gridclass, gridNewsFeedClass }) {
    let newsfeed;
    newsfeed = newspost.map((data,index) => {
        return (
            <NewsFeed data={data} key={index} />
        )
    })
    return (
        <section className='text-white'>
            <h1 className='py-2.5 font-medium text-lg lg:px-1'>News</h1>
            <div className={gridclass}>
                <div className={gridNewsFeedClass}>
                    {/* <NewsFeed src={newsThumbnail[0]} />
                    <NewsFeed src={newsThumbnail[1]} />
                    <NewsFeed src={newsThumbnail[2]} />
                    <NewsFeed src={newsThumbnail[3]} />
                    <NewsFeed src={newsThumbnail[4]} />
                    <NewsFeed src={newsThumbnail[5]} /> */}
                    {newsfeed}
                    <div className='py-3.5 col-span-2 hidden lg:block'>
                        <p className='py-2 text-[12px] font-light'>Visit reputable financial news websites like Bloomberg,<span className='text-white font-medium cursor-pointer text-[13px]'> CNBC, Reuters, or financial</span> sections of well-known news outlets. They often have dedicated sections for trading and market news.</p>
                        <p className='py-2 text-[12px] font-light'>Some market analysis tools offer news aggregation features that pull in relevant news articles and headlines.Start by identifying reliable sources of trading news. Some popular sources include financial news websites, reputable news agencies, and dedicated financial news TV channels.<br /> Consider subscribing to financial news services or platforms that offer real-time updates on trading and financial markets. These services often provide breaking news alerts.</p>
                        <p className='py-2 text-[12px] font-light'>Set up custom alerts on financial news websites or apps for specific keywords or topics that are relevant to your trading interests. This way, you'll receive instant notifications for news that matters to you.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-2 '>
                    <VideoBite />
                    <div className="hidden md:block lg:hidden">
                        <VideoBite />
                    </div>
                </div>
            </div>
        </section>
    )
}

News.defaultProps = {
    gridNewsFeedClass: 'grid grid-cols-1 md:grid-cols-2 col-span-2 md:gap-3 gap-1  content-start bg-gradient-to-t from-half-black via-[#212121] to-half-black p-2 rounded-[12px] md:p-4',
    gridclass: 'grid grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-4',
};
export default News
