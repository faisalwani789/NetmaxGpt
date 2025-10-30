import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'
import { LOGO } from '../utils/constants'
import { BsPlayBtn } from 'react-icons/bs'
import MovieCard from './MovieCard'
import LikeButtons from './LikeButtons';
const CardPopUp2 = ({ showPopUp, setShowPopUp,title,img,description }) => {
  const { cardPosition } = useSelector(store => store.config)
// , similar movies will be added we can also load/dispatch movies to store in hover Pop also and then use here use Selector only
const {similarMovies}=useSelector(store=>store.movies)
console.log(similarMovies)
  // const centerX = window.innerWidth / 2
  // const centerY = window.innerHeight / 2
  // const translateX = centerX - cardPosition.left
  // const translateY = centerY - cardPosition.top
  useEffect(() => {
    if (showPopUp) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [showPopUp])

  return (
    <div className='fixed inset-0 bg-black/60 z-60 ' onClick={() => { setShowPopUp(null) }}>
      <div className='pb-20 bg-black rounded-xl shadow-2xl overflow-y-scroll transform -translate-x-1/2 -translate-y-1/2 fixed w-90 h-100 animate-growPop  z-100 hide-scrollbar  ' style={{ top: cardPosition.top, left: cardPosition.left, "--final-top": `${10}px`, "--final-width": `${850}px `, "--final-height": `${768}px` }} onClick={(e) => e.stopPropagation()}>

        {/* Header Image */}
        <div className="h-100 relative overflow-hidden">
          <img src={TMDB_BASE_URL + img} alt={title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      {/* title/overlay*/}
      <div className='ml-10 absolute bottom-100'>
        <img className='w-30 -ml-2' src={LOGO} alt="" />
        <h2 className="font-bold mt-1 text-4xl text-red-600">{title}</h2>
        <div className='flex gap-4 mt-4'>
          <button className='px-8 py-3 flex gap-2 items-center bg-white rounded-md text-black'>< BsPlayBtn />Play</button>
         <LikeButtons/>
        </div>
       
        
      </div>

        {/* Content */}
        <div className="p-6 px-10 text-white">
          
          <p className="text-sm text-gray-300 mt-2 font-roboto">{description}</p>
          <div className="mt-4 text-sm text-gray-400">
            <p><strong>Runtime:</strong> runtime</p>
            <p><strong>Genres:</strong> genres</p>
            <p><strong>Cast:</strong> cast</p>
          </div>

          {/* Related Movies */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-white">Related Movies</h3>
            <div className=" flex justify-center flex-wrap gap-12 mt-3 pb-4 hide-scrollbar">
              {similarMovies?.map((movie) => (
                <MovieCard title={movie.title} img={movie.backdrop_path}/>
                ))}
            </div>
          </div>
        </div>
        <div className='relative'>
          <span className='absolute bg-white text-black cursor-pointer' onClick={() => setShowPopUp(null)}>X</span>
        </div>


      </div>
    </div>
  )
}

export default CardPopUp2
// width:cardPosition.width
// height:cardPosition.height