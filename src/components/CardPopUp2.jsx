import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'
import useSimilarMovies from '../hooks/useSimilarMovies'
import MovieCard from './MovieCard'
const CardPopUp2 = ({ showPopUp, setShowPopUp,title,img,description,id }) => {
  const { cardPosition } = useSelector(store => store.config)
  useSimilarMovies(id) //loads similar movies into the similar movies
  //i choose to load useSimilarMovies to load here once popup is mounted , similar movies will be added we can also load/dispatch movies to store in hover Pop also and then use here use Selector only
const {similarMovies}=useSelector(store=>store.movies)
console.log(similarMovies)
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const translateX = centerX - cardPosition.left
  const translateY = centerY - cardPosition.top
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
    <div className='fixed inset-0 bg-black/50 z-60 ' onClick={() => { setShowPopUp(null) }}>
      <div className='pb-20 bg-gray-900 rounded-xl shadow-2xl overflow-y-scroll transform -translate-x-1/2 -translate-y-1/2 fixed w-90 h-100 animate-growPop  z-100 hide-scrollbar  ' style={{ top: cardPosition.top, left: cardPosition.left, "--final-top": `${10}px`, "--final-width": `${850}px `, "--final-height": `${1000}px` }} onClick={(e) => e.stopPropagation()}>

        {/* Header Image */}
        <div className="h-100 relative overflow-hidden">
          <img src={TMDB_BASE_URL + img} alt={title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-sm text-gray-300 mt-2 font-roboto">{description}</p>
          <div className="mt-4 text-sm text-gray-400">
            {/* <p><strong>Runtime:</strong> {card.runtime}</p>
            <p><strong>Genres:</strong> {card.genres.join(', ')}</p>
            <p><strong>Cast:</strong> {card.cast.join(', ')}</p> */}
          </div>

          {/* Related Movies */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-white">Related Movies</h3>
            <div className="flex flex-wrap gap-4 mt-3 pb-4 hide-scrollbar">
              {similarMovies?.map((movie) => (
                <div key={movie.id} className=''>
                  <div className='w-55'>
                    <img src={TMDB_BASE_URL+movie.backdrop_path}></img>
                  </div>
                  <p>{movie.title}</p>
                  
                  </div>
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