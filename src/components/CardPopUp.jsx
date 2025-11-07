import React, { useEffect, useRef, useState } from 'react'
import { TMDB_BASE_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
import { FiChevronDown } from "react-icons/fi"
import Tooltip from './Tooltip'
import useSimilarMovies from '../hooks/useSimilarMovies'
import { BsPlayBtn } from 'react-icons/bs'
import LikeButtons from './LikeButtons'
import useGetDetails from '../hooks/useGetDetails'
import useGetCast from '../hooks/useGetCast'
import useGetMovieVideos from '../hooks/useGetMovieVideos'
import { addMovieCardTrailer } from '../utils/movieSlice'
import { options } from '../utils/constants'
import VideoBackground from './VideoBackground'
import VideoCard from './VideoCard'
import YouTubePlayer from './YouTubePlayer'

const CardPopUp = ({ id, popularity, title, img, handleMouseLeave, handleMoreInfo }) => {
  useGetMovieVideos(id, addMovieCardTrailer)
  useSimilarMovies(id) //loads similar movies into the similar movies
  //i choose to load useSimilarMovies here as   once popup is mounted i can use them in popup2
  useGetDetails(id)
  useGetCast(id)
  const [showVideo, setShowVideo] = useState(false)
  const [videoSrc, setVideoSrc] = useState(null)
  const { cardPosition, hoveredId } = useSelector(store => store.config)
  const { movieDetails, movieCardTrailer } = useSelector(store => store.movies)
  const cardRefs = useRef({})

 
  useEffect(() => {
    const fetchVidoSrc = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          const filterData = res.results.filter((x) => x.type == "Trailer")
          const trailer = filterData.length ? filterData[0] : res[0]
          setVideoSrc(trailer)
          // console.log(videoSrc)
        })
        .catch(err => console.error(err));
    }
    fetchVidoSrc()
  }, [id])
 
 useEffect(() => {
    let timer;
    if (hoveredId === id) {
      timer = setTimeout(() => {
        setShowVideo(true)
      }, 1800)
    } else {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [hoveredId])
  return (
    <div ref={cardRefs} style={{ transformOrigin: 'center', position: 'absolute', top: cardPosition.top + window.scrollY, left: cardPosition.left + window.scrollX }} className={`transform -translate-x-1/2 -translate-y-1/2 w-90 z-50 bg-black rounded-lg shadow-xl   animate-grow  `} onMouseEnter={() => { }} onMouseLeave={handleMouseLeave} >
      <div className='bg-black rounded-xl shadow-lg duration-200 ' style={{ animationFillMode: 'both' }}>
        <div className="h-48 relative overflow-hidden  ">
          {showVideo && videoSrc ?(<YouTubePlayer videoId={videoSrc?.key} />) : (
              <img src={TMDB_BASE_URL + img} alt={"title"} className={`w-full h-full object-cover transition-opacity duration-1800 ease-in-out ${showVideo && videoSrc ? 'opacity-0' : 'opacity-100'} `} /> 
            )
          }

          <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent" />
        </div>
        <div>

        </div>

        <div className="p-5 text-white">
          <div className='flex justify-between'>
            <h3 className="font-bold text-xl">{title}</h3>
            {/* <p className="text-sm text-gray-300 mt-2 line-clamp-3">{"description"}</p> */}
            <Tooltip text={"Episodes & Info"}>
              <FiChevronDown className='text-white text-2xl rounded-xl border-2 cursor-pointer ' onMouseLeave={(e) => (e)} onClick={(e) => { handleMoreInfo(e, id) }}></FiChevronDown>
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
            <button className='px-3 py-2 flex gap-2 items-center bg-white rounded-4xl text-black cursor-pointer'>< BsPlayBtn /></button>
            <LikeButtons />
          </div>
          <div className="flex gap-2 mt-4 text-xs text-gray-400">
            {movieDetails?.adult ? <span className='outline-1 px-1 border-white text-sm rounded-sm'>A</span > : < span className='outline-1 border-white px-1 text-sm  rounded-sm'>U/A 13+</span>}
            <span className='text-sm'>{movieDetails?.runtime}minutes</span>
            <span className='outline-1 px-1 border-white text-sm rounded-sm'>HD</span>

            <span className="text-green-500">{popularity} popularity</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardPopUp