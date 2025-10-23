import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'

import ModalPortal from '../utils/ModalPortal'
import VideoBackground from './VideoBackground'
import { setHoveredId, setPosition } from '../utils/configurationSlice'
import CardPopUp from './CardPopUp'
const MovieCard = ({ img, id, popularity, title }) => {

  const dispatch = useDispatch()
  const [timeoutId, setTimeoutId] = useState(null)
  const { hoveredId } = useSelector(store => store?.config)
  const handleMouseEnter = (e, id) => {
  
    if (timeoutId) clearTimeout(timeoutId)
    const rect = e.currentTarget.getBoundingClientRect()
    const newTimeout = setTimeout(() => {

      dispatch(setPosition({
        top: rect.top + rect.height / 2 + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,

      }))
      dispatch(setHoveredId(id))
    }, 1000)
    setTimeoutId(newTimeout)
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId)
    dispatch(setHoveredId(null));
    dispatch(setPosition(null))
  };

  if (!img) {
    return null
  }

  return (
    <div className='w-55  shrink-0 relative card '>
      {
      hoveredId !== id &&
       (<div className='w-55 h-auto  rounded-lg  ' onMouseEnter={(event) => handleMouseEnter(event, id)} onMouseLeave={handleMouseLeave} >
        <img className='w-full h-30 object-cover object-center rounded-lg' src={TMDB_BASE_URL + img} />
      </div>)}

      {console.log(hoveredId)}
      {hoveredId === id && (<ModalPortal>
        <CardPopUp title={title} handleMouseLeave={handleMouseLeave} img={img} popularity={popularity} />
      </ModalPortal>)}
    </div>
  )
}

export default MovieCard