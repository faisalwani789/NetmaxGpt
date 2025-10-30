import React, { useRef } from 'react'
import { TMDB_BASE_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
import {FiChevronDown} from "react-icons/fi"
import Tooltip from './Tooltip'
import useSimilarMovies from '../hooks/useSimilarMovies'
import { BsPlayBtn } from 'react-icons/bs'
import LikeButtons from './LikeButtons'
const CardPopUp = ({id,popularity,title,img,handleMouseLeave,handleMoreInfo}) => {
    useSimilarMovies(id) //loads similar movies into the similar movies
    //i choose to load useSimilarMovies here as   once popup is mounted i can use them in popup2
    const {cardPosition}=useSelector(store=>store.config)
    const cardRefs=useRef({})
  return (
    <div ref={cardRefs} style={{ transformOrigin: 'center', position: 'absolute', top: cardPosition.top+window.scrollY, left: cardPosition.left+window.scrollX }} className={`transform -translate-x-1/2 -translate-y-1/2 w-90 z-50 bg-black rounded-lg shadow-xl   animate-grow cursor-pointer `} onMouseEnter={() => { }} onMouseLeave={handleMouseLeave} >
          <div className='bg-black rounded-xl shadow-lg duration-200 ' style={{ animationFillMode: 'both' }}>
            <div className="h-48 relative overflow-hidden ">
              <img src={TMDB_BASE_URL + img} alt={"title"} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="p-5 text-white">
              <div className='flex justify-between'>
                 <h3 className="font-bold text-xl">{title}</h3>
              {/* <p className="text-sm text-gray-300 mt-2 line-clamp-3">{"description"}</p> */}
              <Tooltip text={"Episodes & Info"}>
                <FiChevronDown className='text-white text-2xl rounded-xl border-2 ' onMouseLeave={(e)=>(e)} onClick={(e)=>{handleMoreInfo(e,id)}}></FiChevronDown>
              </Tooltip>
              </div>
             
              

              {/* <div className="flex gap-3 mt-4">
                <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition">
                  Play
                </button>
                <button className="border border-gray-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
                  + My List
                </button>
              </div> */}
               <div className=' mt-4 flex gap-4'>
                        <button className='px-2 py-2 flex gap-2 items-center bg-white rounded-4xl text-black'>< BsPlayBtn /></button>
                       <LikeButtons/>
                      </div>
              <div className="flex gap-4 mt-4 text-xs text-gray-400">
                <span>TV-14</span>
                <span>4 Seasons</span>
                <span className="text-green-500">{popularity} popularity</span>
              </div>
            </div>

          </div>
         
    </div>
  )
}

export default CardPopUp