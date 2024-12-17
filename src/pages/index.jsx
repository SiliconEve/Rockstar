import React,{ useState } from 'react'
import Newsfire from '../components/newsfire'
import { FeaturedGames } from '../components/header'
import Viewmore from '../components/viewmore'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Newsfire/>
    <section className='min-h-screen w-full bg-[var(--background-darklight)] sm:px-[100px] sm:py-[50px]'>
        <div>
            <h1 className='max-sm:ps-2 max-sm:text-2xl sm:text-4xl font-bold sm:my-10'>Featured Games</h1>
            </div>
            <div className="banner max-sm:h-40 sm:h-[412px] w-full rounded-lg overflow-hidden mb-8 bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png')] sm:bg-cover max-sm:bg-cover hover:scale-105 hover:opacity-80 transition-all duration-300"></div>
        <div className='max-sm:grid max-sm:grid-cols-2 gap-3 sm:flex sm:justify-between'>
        <FeaturedGames/>
        </div>
        <Viewmore/>
    
    </section>
    <Footer/>
    </>
    
  )
}


//carousel 

function Carousel(){
    const [idxCrousel,setidxCrousel] = useState(0)

    const gamesLst = [
        {   id:0,
            source:'https://videos-rockstargames-com.akamaized.net/v4/rkoCtr1r/art/global.jpg',
            game_name:'Grand Theft Auto VI',
            game_heading:'First trailer',
            alt_text: 'Poster of Grand Theft Auto VI'
        },
        {   id:1,
            source:'https://videos-rockstargames-com.akamaized.net/v4/r0ee9g98/art/en-us.jpg',
            game_name:'Red Dead Redemption',
            game_heading:'Red Dead and Undead Nightmare',
            alt_text: 'Poster of Red Dead and Undead Nightmare'
        },
        {   id:2,
            source:'https://videos-rockstargames-com.akamaized.net/v4/oa46rs8r/art/global.jpg',
            game_name:'Grand Theft Auto Online',
            game_heading:'Bottom Dollar Bounties',
            alt_text: 'Poster of Bottom Dollar Bounties'
        },
        {   id:3,
            source:'https://videos-rockstargames-com.akamaized.net/v4/r3175t5r/art/global.jpg',
            game_name:'Grand Theft Auto Online',
            game_heading:'The Clucking Bell Farm Raid',
            alt_text: 'Poster of The Clucking Bell Farm Raid'
        }
    ]

    return (
        <>
            <section className='min-h-[68vh] sm:h-[78vh]  bg-black w-full  sm:flex '>
                <div className="w-full sm:w-[70%]">
                    <img src={gamesLst[idxCrousel].source} 
                    alt={gamesLst[idxCrousel].alt_text || "Game promotional image"}
                    className='object-cover transition-all' />
                </div>
                <div className='p-9 sm:px-10 sm:py-20 '>
                        <div className='h-2/4  sm:block'>
                            <span>
                            <p className='text-[0.85rem] capitalize font-bold text-gray-200 '>{gamesLst[idxCrousel].game_name}</p>
                            <h1 className='text-[2.50rem] font-semibold sm:pt-3 tracking-tighter text-balance '>{gamesLst[idxCrousel].game_heading}</h1>
                            </span>
                            <Watch_now/>      
                    </div>
                    <div className='flex gap-4  sm:mt-[200px]'>
                                <button onClick={()=>setidxCrousel(0)} className={`transition-all ease-in-out h-[15px] ${idxCrousel==0?'w-[50px]':'w-[14px] opacity-50'} bg-white rounded-full`} aria-label="First Carousel Slide"></button>
                                <button onClick={()=>setidxCrousel(1)} className={`transition-all ease-in-out h-[15px] ${idxCrousel==1?'w-[50px]':'w-[14px] opacity-50'} bg-white rounded-full`} aria-label="Second Carousel Slide"></button>
                                <button onClick={()=>setidxCrousel(2)} className={`transition-all ease-in-out h-[15px] ${idxCrousel==2?'w-[50px]':'w-[14px] opacity-50'} bg-white rounded-full`} aria-label="Third Carousel Slide"></button>
                                <button onClick={()=>setidxCrousel(3)} className={`transition-all ease-in-out h-[15px] ${idxCrousel==3?'w-[50px]':'w-[14px] opacity-50'} bg-white rounded-full`} aria-label="Fourth Carousel Slide"></button>
                                
                        </div>
                    
                </div>
            </section>
        </>
    )
}
//Watch now button
function Watch_now(){
    return (
        <>
            <button className='uppercase hover:bg-[var(--rockstar-gold)] hover:text-stone-900 border max-sm:w-full max-sm:py-3 max-sm:my-6   sm:px-16 sm:py-4 rounded-lg sm:mt-6 font-bold text-lg'>Watch now</button>
        </>
    )
}