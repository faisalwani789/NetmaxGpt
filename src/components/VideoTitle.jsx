import VideoButtons from './VideoButtons'
import { TMDB_BASE_URL } from '../utils/constants'

const VideoTitle = ({ title, overview,poster  }) => {
  return (
    <div className='absolute top-[30vh] left-15  w-1/2 text-white z-9'>
      <div className='w-20 h-20 overflow-hidden'>
          <img className='object-cover' src={`${TMDB_BASE_URL}${poster}`} alt={title} />
      </div>
      
      <h1 className='text-5xl font-bold py-4 text-red-600 drop-shadow-lg'>{title}</h1>
      <p className='text-xl  pb-4' >{overview}</p>
      <VideoButtons />
    </div>

  )
}

export default VideoTitle