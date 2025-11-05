import {useSelector} from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'

const MovieCard = ({ img, id,onEnter=()=>console.log('no handler attached'),onLeave=()=>{} }) => {
  const { hoveredId } = useSelector(store => store?.config)
  
     if (!img) {
    return null
  }
  return (
    <div className='w-55  shrink-0 relative card cursor-pointer font-roboto '>
      {
        hoveredId !== id &&
        (<div className='w-55 h-auto  rounded-lg  ' onMouseEnter={(event) => onEnter?.(event, id) } onMouseLeave={onLeave } >
          <img className='w-full h-30 object-cover object-center rounded-lg' src={TMDB_BASE_URL + img} />
        </div>)}
    
    </div>
  )
}

export default MovieCard