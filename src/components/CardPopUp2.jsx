import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'
import { LOGO } from '../utils/constants'
import { BsPlayBtn } from 'react-icons/bs'
import MovieCard from './MovieCard'
import LikeButtons from './LikeButtons';
import RelatedMovieCard from './RelatedMovieCard'
import YouTubePlayer from './YoutubePlayer'
import { setPosition } from '../utils/configurationSlice'
import { useDispatch } from 'react-redux'
import useGetCast from '../hooks/useGetCast'
import useGetMovieVideos from '../hooks/useGetMovieVideos'
import useSimilarMovies from '../hooks/useSimilarMovies'
import useGetDetails from '../hooks/useGetDetails'
import { addMovieCardTrailer } from '../utils/movieSlice'
const CardPopUp2 = ({ showPopUp, setShowPopUp, title, img, description, id, isMobile }) => {

  useGetMovieVideos(id, addMovieCardTrailer)
  useSimilarMovies(id) //loads similar movies into the similar movies
  useGetDetails(id)
  useGetCast(id)
  const { cardPosition } = useSelector(store => store.config)
  const [closing, setClosing] = useState(false) //for closing animation
  const timeoutRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false) //for showing video
  const castScrollRef = useRef()




  // , similar movies will be added we can also load/dispatch movies to store in hover Pop also and then use here use Selector only
  const { similarMovies, movieDetails, movieCast, movieCardTrailer } = useSelector(store => store.movies)
  const EnhancedCard = RelatedMovieCard(MovieCard)
  const director = movieCast?.crew?.find(crew => crew.job == 'Director')
  // const centerX = window.innerWidth / 2
  // const centerY = window.innerHeight / 2
  // const translateX = centerX - cardPosition.left
  // const translateY = centerY - cardPosition.top

  const handleScroll = () => {
    castScrollRef.current.scrollIntoView({
      behaviour: 'smooth'
    })
  }
  const handleSetShowPopUp = () => {
    setClosing(true)
    timeoutRef.current = setTimeout(() => {
      setShowPopUp(null)
    }, 1600);
    // setVisible(false)

  }

  useEffect(() => {
    if (showPopUp) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
      clearTimeout(timeoutRef.current)
    }
  }, [showPopUp])

  useEffect(() => {
    // if(showPopUp)
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])



  return (
    <div className='fixed inset-0 bg-black/60 z-60 ' onClick={handleSetShowPopUp}>


      <div className={`pb-20 bg-black md:rounded-xl shadow-2xl overflow-y-scroll transform md:-translate-x-1/2 md:-translate-y-1/2 fixed w-full h-screen md:w-90 md:h-100 ${!isMobile ? (!closing ? 'animate-growPop' : 'animate-shrinkPop') : ''}  z-100 hide-scrollbar  `} style={{ top: cardPosition.top, left: cardPosition.left, "--final-top": `${10}px`, "--final-width": `${850}px `, "--final-height": `${768}px`, "--initial-top": `${cardPosition.top}px`, "--initial-left": `${cardPosition.left}px` }} onClick={(e) => e.stopPropagation()}>
        <span className=' px-1.5 absolute right-4 top-4 z-70 bg-white rounded-4xl text-black cursor-pointer  hover:bg-gray-400 transition-colors ease-in-out duration-500' onClick={handleSetShowPopUp}>X</span>
        {/* Header Image */}
        <div className="h-100 relative overflow-hidden">
          {showVideo && movieCardTrailer ? (<YouTubePlayer videoId={movieCardTrailer?.key} />) : (<img src={TMDB_BASE_URL + img} alt={title} className="w-full h-full object-cover object-top" />)}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

             {/* title/overlay*/}
          <div className='ml-10 absolute bottom-20 sm:bottom-20 md:bottom-0'>
            <img className='w-20  md:w-30 -ml-2' src={LOGO} alt="" />
            <h2 className="font-bold mt-1 text-xl md:text-4xl text-red-600">{title}</h2>
            <div className='flex gap-4 mt-4'>
              <button className='px-8 py-3 flex gap-2 items-center bg-white rounded-md text-black cursor-pointer'>< BsPlayBtn />Play</button>
              <LikeButtons />
            </div>


          </div>
        </div>


        {/* Content */}
        <div className="p-6 px-10 text-white ">
          <div className='flex gap-5'>


            <div className='flex-2'>
              <div>
                <span className='mr-2'>{movieDetails?.release_date.split("-")[0]}</span>
                <span className='mr-2'>{movieDetails?.runtime}minutes</span>
                <span className='outline-1 px-1 border-white text-sm rounded-sm'>HD</span>
              </div>
              <div>
                {movieDetails?.adult ? <span className='outline-1 px-1 border-white text-sm rounded-sm'>A</span > : < span className='outline-1 border-white px-1 rounded-sm'>U/A 13+</span>}
              </div>
              <p className="text-sm text-gray-300 mt-2 font-roboto">{description}</p>
            </div>

            <div className=" text-sm text-gray-400 flex-1">

              <p><strong>Genres:</strong> {movieDetails?.genres.map((genre) => genre.name + ",")}</p>
              <p><strong>Cast:</strong> {movieCast?.cast?.slice(0, 4).map(cast => cast.name)} <span className='hover:underline' onClick={handleScroll}>more</span></p>
              <p><strong>Tagline:</strong>{movieDetails?.tagline}</p>
            </div>
          </div>
          {/* Related Movies */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-white">Related Movies</h3>
            <div className=" flex justify-center flex-wrap md:gap-12 gap-2 mt-3 pb-4 hide-scrollbar">
              {similarMovies?.map((movie) => (
                <EnhancedCard key={movie.id} title={movie.title} img={movie.backdrop_path} />
              ))}
            </div>
          </div>
        </div>



        <div ref={castScrollRef} className=" text-sm text-gray-400 flex-1 px-10">
          <p><strong>Director:</strong>{director?.name}</p>
          <p><strong>Writer:</strong>{movieCast?.crew?.find(crew => crew.job == 'Writer')?.name}</p>
          <p><strong>Cast:</strong> {movieCast?.cast?.map(cast => cast.name + ",")} </p>
          <p><strong>Genres:</strong> {movieDetails?.genres.map((genre) => genre.name + ",")}</p>
          <p><strong>Maturity Rating:</strong> {movieDetails?.adult ? <span className='outline-1 px-1 border-white text-sm rounded-sm'>A</span > : < span className='outline-1 border-white px-1 rounded-sm'>U/A 13+</span>} </p>

        </div>

      </div>
    </div>
  )
}

export default CardPopUp2
// width:cardPosition.width
// height:cardPosition.height