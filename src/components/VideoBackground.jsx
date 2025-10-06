import React from 'react'
import useGetMovieVideos from '../hooks/useGetMovieVideos'
import { useSelector } from 'react-redux'
const VideoBackground = ({movieId}) => {
useGetMovieVideos(movieId)
const currentVideoTrailer=useSelector(store=>store.movies?.trailerVideo)
const youtube_key=currentVideoTrailer?.key
  return (
    <div className='w-full h-[100vh] overflow-hidden brightness-60'>
      <iframe className='w-full h-[100vh] border-2 scale-130 origin-center ' src={`https://www.youtube.com/embed/${youtube_key}?rel=0&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default VideoBackground