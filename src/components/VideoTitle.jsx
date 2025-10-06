import React from 'react'
import VideoButtons from './VideoButtons'
import useMovieDetails from "../hooks/useMovieDetails"
import { TMDB_BASE_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
const VideoTitle = ({ title, overview, movieId }) => {
  useMovieDetails(movieId)
  const movieDetails = useSelector(store => store.movies?.movieDetail)
  // if(!movieDetails)return
  // console.log("movie details" + movieDetails)
  return (
    <div className='absolute top-[30vh] left-15  w-1/3 text-white z-10'>
      <div className='w-20 h-20 overflow-hidden'>
          <img className='object-cover' src={`${TMDB_BASE_URL}${movieDetails?.poster_path}`} alt={movieDetails?.title} />
      </div>
      
      <h1 className='text-5xl font-bold py-4 drop-shadow-lg ' >{title}</h1>
      <p className='text-xl font-normal pb-4' >{overview}</p>
      <VideoButtons />
    </div>

  )
}

export default VideoTitle