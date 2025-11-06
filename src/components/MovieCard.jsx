import {useSelector} from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'

const MovieCard = ({ img, id,onEnter=()=>console.log('no handler attached'),onLeave=()=>{} , onClick }) => {
  const { hoveredId } = useSelector(store => store?.config)

     if (!img) {
    return null
  }
  return (
    <div className='md:w-55 md:h-auto h-50 w-40  shrink-0 relative card cursor-pointer font-roboto '>
      {
        hoveredId !== id &&
        (<div className='md:w-55 md:h-auto w-full h-full  rounded-lg  ' onMouseEnter={(event) => onEnter?.(event, id) } onMouseLeave={onLeave } onClick={()=>onClick(id)} >
          <img className='md:w-full md:h-auto w-full h-full object-cover object-center rounded-lg' src={TMDB_BASE_URL + img} />
        </div>)}
    
    </div>
  )
}

export default MovieCard