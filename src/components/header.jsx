import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isgamesOpen,setGames] = useState(false)
    const [issearchOpen,setsearch] = useState(false)

    //games menu Toogle
    const gamesToogle=()=>{
        setGames(!isgamesOpen)
        
    }

    //yaha search Toogle ka function
    const search = ()=>{
        setsearch(!issearchOpen)
    }
    
  return (
    <>
    <nav className='px-8 h-[100px] relative bg-black flex justify-between sm:justify-between items-center sm:px-20 text-white  overflow-x-hidden'>        
        <div className='flex '><img className=' h-[1.7] sm:h-[1.9rem]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg" alt="this is the company logo"  /></div>
        <div className='h-full ms-36 hidden sm:block'>
            <ul className='flex   h-full  justify-end  capitalize font-medium text-lg'>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white ' onClick={gamesToogle}>Genres<img className={`float-right h-[20px] mt-1 ${isgamesOpen?'rotate-180':' '}`} src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg" alt="genres"></img></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><Link to={'/newsfire/'}>Newswire</Link></li>
                <li className="px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white"><a href="https://www.rockstargames.com/videos" target="_blank" rel="noopener noreferrer">Video</a></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><Link>Downloads</Link></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><a href="https://store.rockstargames.com/?_gl=1*1bk95xp*_ga*MTM4NTk0NTAxMC4xNzI3OTcyNTI0*_ga_PJQ2JYZDQC*MTcyNzk3MjUyNC4xLjEuMTcyNzk3NTEwOC4wLjAuMA.." target="_blank" >Store <img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg" alt="store link"/></a></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><a href="https://support.rockstargames.com/?_gl=1*9ux0ei*_ga*MTM4NTk0NTAxMC4xNzI3OTcyNTI0*_ga_PJQ2JYZDQC*MTcyODA1OTA1My41LjEuMTcyODA2MTU3NS4wLjAuMA.." target="_blank">Support<img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg" alt="store support link"/></a></li>
            </ul>
        </div>
        <div className=' hidden sm:flex  items-center gap-7 '>
            <a href='#' className="bg-[var(--rockstar-gold)] text-black font-bold rounded py-2 px-4 pt-[7px] text-lg uppercase tracking-[-1px]">get launcher</a>
            <div onClick={search}><img className='h-[25px] cursor-pointer ' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="search"  /></div>
        </div>
    </nav>
    <Games isopen={isgamesOpen}/>
    <Search issearch={issearchOpen} search={search}/>
    </>
  )
}
//Ye Games func --------------------------------------------------------

function Games(prop) {
    return (
      <>
        <div
          className={`hidden absolute w-full genres-menu sm:flex items-center bg-[var(--background-darklight)] border border-gray-900 overflow-y-hidden transform transition-all duration-300 ${prop.isopen ? ' h-[50vh]' : ' h-0 '}`}
        >
          <div className="w-full mx-10">
            <div className="flex justify-between py-3">
              <h1 className="text-4xl font-bold leading-tight mt-4">Genres</h1>
            </div>
            <div className="genres-list flex flex-col gap-4">
              <div className="genre-item text-lg border border-gray-700 h-[60px] flex items-center justify-center hover:scale-[0.99] transition-all duration-300 rounded-lg p-4">
                Action
              </div>
              <div className="genre-item text-lg border border-gray-700 h-[60px] flex items-center justify-center hover:scale-[0.99] transition-all duration-300 rounded-lg p-4">
                Adventure
              </div>
              <div className="genre-item text-lg border border-gray-700 h-[60px] flex items-center justify-center hover:scale-[0.99] transition-all duration-300 rounded-lg p-4">
                RPG
              </div>
              <div className="genre-item text-lg border border-gray-700 h-[60px] flex items-center justify-center hover:scale-[0.99] transition-all duration-300 rounded-lg p-4">
                Strategy
              </div>
              <div className="genre-item text-lg border border-gray-700 h-[60px] flex items-center justify-center hover:scale-[0.99] transition-all duration-300 rounded-lg p-4">
                Simulation
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  
//Featured games cards ---------------------------------------------------------------------
export function FeaturedGames(){
    return(
        <>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[500px] hover:scale-[1.05] transition-all duration-300 sm:w-[400px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[500px] hover:scale-[1.05] transition-all duration-300 sm:w-[400px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[500px] hover:scale-[1.05] transition-all duration-300 sm:w-[400px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[500px] hover:scale-[1.05] transition-all duration-300 sm:w-[400px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg')] bg-cover"></div>
                  
                </>
    )
}
//Search Bar toogle -------------------------------------------------------------------------------------------------
function Search(prop){
    
    return(
        <>
        <div className={`absolute overflow-y-hidden w-full bg-stone-800 flex text-3xl px-20 transition-all ${prop.issearch?'h-24 ':'h-0'}`}>
            <div className="sea grow gap-4 flex items-center">
                <img className="h-8" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="Search" />
                
                <input className="outline-none w-full h-full bg-transparent font-bold placeholder:text-white placeholder:text-3xl " type="text" placeholder='Search rockstar games...' name="query" id="query" aria-label='Search Rockstar Games' />
            </div>
            <div className="options grow flex justify-center items-center gap-4">
            <button className='font-bold text-xl bg-stone-100 text-stone-900 px-6 py-2 rounded-full hover:bg-stone-300 transition-all duration-300'>Games</button>
            <button className='font-bold text-xl bg-stone-600 text-white px-6 py-2 rounded-full hover:bg-stone-500 transition-all duration-300'>Posts</button>
            <button className='font-bold text-xl bg-stone-600 text-white px-6 py-2 rounded-full hover:bg-stone-500 transition-all duration-300'>Video
            </button>
            <button className='font-bold text-xl bg-stone-600 text-white px-6 py-2 rounded-full hover:bg-stone-500 transition-all duration-300'>Community</button>

                
                <div onClick={prop.search}><img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg" alt='Search for any game'/></div>
            </div>

        </div>
        </>

    )
}