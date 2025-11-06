import VideoButtons from './VideoButtons'
import { TMDB_BASE_URL } from '../utils/constants'
import { useEffect, useState } from 'react'

const VideoTitle = ({ title, overview, poster }) => {
  const [showDescription, setShowDescription] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(false)
    }, 5000)

    return () => clearTimeout(timer)
  },[])
  return (
    <div className='absolute md:top-35 top-5  sm:top-30 md:left-15 left-2  w-1/2 text-white z-9 '>
      <div className={`grid grid-rows-3`}>
      
        <div className={`transition-all duration-2000 ease-in-out ${showDescription?'start-rows-1 transform translate-y-0':'row-start-1 translate-y-35 '}`}>
        
          <div className='hidden md:block w-20 h-20 overflow-hidden '>
            <img className='object-cover' src={`${TMDB_BASE_URL}${poster}`} alt={title} />
          </div>
          <h1 className={`text-lg font-bold py-4 text-red-600 drop-shadow-lg ${showDescription?'md:text-7xl':'md:text-4xl'} `}>{title}</h1>
         
        </div>
        {showDescription && <div className='grid-row-2'>
          <p className='hidden md:block md:text-xl  pb-4' >{overview}</p>
        </div>}
         
        <div className='row-start-3 '>
          <VideoButtons />
        </div>
      </div>



    </div>

  )
}

export default VideoTitle