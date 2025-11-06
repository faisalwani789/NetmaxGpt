import MovieCard from './MovieCard'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setPosition, setHoveredId } from '../utils/configurationSlice'
import ModalPortal from '../utils/ModalPortal'
import CardPopUp from './CardPopUp'
import CardPopUp2 from './CardPopUp2'

const Movielist = ({ title, movies, scroll }) => {
  const { hoveredId } = useSelector(store => store?.config)
  const dispatch = useDispatch()
  const [timeoutId, setTimeoutId] = useState(null)
  const [showPopUp, setShowPopUp] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)


  const handleMoreInfo = (e, id) => {
    //we have to send the coordinates....we will be using top left as that of popUp1 already stored
    //we do not need to hide the popUp manually it is automatically hiding as mouseleave is firing
    setShowPopUp(id)

  }
  const handleMouseEnter = (e, id) => {

    if (!isMobile) {
      if (timeoutId) clearTimeout(timeoutId)
      const rect = e.currentTarget.getBoundingClientRect()
      const newTimeout = setTimeout(() => {

        dispatch(setPosition({
          top: rect.top + rect.height / 2,//removed +window.ScorllY from here and added in style
          left: rect.left + rect.width / 2,//removed +window.ScorllX from here and added in style
          width: rect.width,
          height: rect.height
        }))
        dispatch(setHoveredId(id))
      }, 1000)
      setTimeoutId(newTimeout)
    };
  }
  const handleMouseLeave = () => {
    if (!isMobile) {
      // console.log("mouse leaved" + e.target)
      // console.log("mouse leaved" + e.currentTarget)
      if (timeoutId) clearTimeout(timeoutId)
      const newTimeout = setTimeout(() => {
        dispatch(setHoveredId(null));
        // dispatch(setPosition(null))
      }, 200)
      setTimeoutId(newTimeout)
    }
  }
  const handleClick = (id) => {
    console.log('clicked')
    if (isMobile) {
      dispatch(setPosition({
      // we don't need to reset positon of popup 2 in case of mobile as it was never set because popup2 is disabled but incase we first used web view then switch to mobile view we need this
        top: 0,
        left: 0
      }))
      setShowPopUp(id)
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='md:ml-15 ml-2 py-8 font-roboto'>
      <h4 className='text-2xl text-white '>{title}</h4>
      <div className={`flex gap-3  hide-scrollbar ${scroll ? 'overflow-x-scroll' : 'flex-wrap'}  `}>
        {movies?.map((movie) => (
          <React.Fragment key={movie.id}>
            <MovieCard img={movie.backdrop_path} id={movie.id} popularity={movie.popularity} title={movie.title} description={movie.overview} onEnter={handleMouseEnter} onLeave={handleMouseLeave} onClick={handleClick} />

            {hoveredId === movie.id && (<ModalPortal>
              <CardPopUp title={movie.title} img={movie.backdrop_path} handleMouseLeave={handleMouseLeave} popularity={movie.popularity} id={movie.id} handleMoreInfo={handleMoreInfo} />
            </ModalPortal>)}

            {showPopUp === movie.id && (<ModalPortal>
              <CardPopUp2 setShowPopUp={setShowPopUp} showPopUp={showPopUp} img={movie.backdrop_path} description={movie.overview} title={movie.title} id={movie.id} isMobile={isMobile} />
            </ModalPortal>)}
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Movielist