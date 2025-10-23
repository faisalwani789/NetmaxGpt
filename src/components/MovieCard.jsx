import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'

import ModalPortal from '../utils/ModalPortal'
import VideoBackground from './VideoBackground'
import { setPop, setPosition } from '../utils/configurationSlice'

const MovieCard = ({ img, id,popularity,title }) => {
  const dispatch = useDispatch()
  const { cardPosition } = useSelector(store => store.config)
  // console.log(id+"id")
  const popUpRef = useRef(null)
  const cardRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  //  const timeoutRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null)

  const handleMouseEnter = (e, id) => {
    console.log(e + "id")
    // if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timeoutId) clearTimeout(timeoutId)
    const rect = e.currentTarget.getBoundingClientRect()
    const newTimeout = setTimeout(() => {

      dispatch(setPosition({
        top: rect.top + rect.height / 2 + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,

      }))
      setHoveredId(id)
    }, 1000)
    setTimeoutId(newTimeout)
  };

  const handleMouseLeave = () => {
    // if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timeoutId) clearTimeout(timeoutId)
    setHoveredId(null);
    setPosition(null)
  };





  if (!img) {
    return null
  }




  return (
    <div className='w-55  shrink-0 relative card '>
      {hoveredId !== id && (<div className='w-55 h-auto  rounded-lg  ' ref={cardRef} onMouseEnter={(event) => handleMouseEnter(event, id)} onMouseLeave={handleMouseLeave} >
        <img className='w-full h-30 object-cover object-center rounded-lg' src={TMDB_BASE_URL + img} />
      </div>)}

      {console.log(hoveredId)}
      {hoveredId === id && (<ModalPortal>
        <div ref={popUpRef} style={{ transformOrigin: 'center', position: 'absolute', top: cardPosition.top, left: cardPosition.left }} className={` -translate-x-1/2 -translate-1/2 w-80 z-50 bg-black rounded-lg shadow-xl   animate-grow `} onMouseEnter={() => { }} onMouseLeave={handleMouseLeave} >
          <div className='bg-black rounded-xl   shadow-lg duration-200 ' style={{ animationFillMode: 'both' }}>
            <div className="h-48 relative overflow-hidden">
              <img src={TMDB_BASE_URL + img} alt={"title"} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="p-5 text-white">
              <h3 className="font-bold text-xl">{title}</h3>
              {/* <p className="text-sm text-gray-300 mt-2 line-clamp-3">{"description"}</p> */}

              <div className="flex gap-3 mt-4">
                <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition">
                  Play
                </button>
                <button className="border border-gray-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
                  + My List
                </button>
              </div>

              <div className="flex gap-4 mt-4 text-xs text-gray-400">
                <span>TV-14</span>
                <span>4 Seasons</span>
                <span className="text-green-500">{popularity} popularity</span>
              </div>
            </div>

          </div>
        </div>
      </ModalPortal>)}
    </div>
  )
}

export default MovieCard