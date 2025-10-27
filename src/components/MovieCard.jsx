import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TMDB_BASE_URL } from '../utils/constants'
import Tooltip from './Tooltip'
import ModalPortal from '../utils/ModalPortal'
import VideoBackground from './VideoBackground'
import { setHoveredId, setPosition } from '../utils/configurationSlice'
import CardPopUp from './CardPopUp'
import CardPopUp2 from './CardPopUp2'
import useSimilarMovies from '../hooks/useSimilarMovies'
const MovieCard = ({ img, id, popularity, title,description }) => {
  
  const dispatch = useDispatch()
  const [timeoutId, setTimeoutId] = useState(null)
  const [showPopUp, setShowPopUp] = useState(null)
  const [isClick, setIsClick] = useState(false)
  // const[test,setTest]=useState(null)
  const { hoveredId } = useSelector(store => store?.config)
  const handleMouseEnter = (e, id) => {

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

  const handleMouseLeave = (e) => {
    if (isClick) return
    console.log("mouse leaved"+e.target)
    console.log("mouse leaved"+e.currentTarget)
    if (timeoutId) clearTimeout(timeoutId)
    const newTimeout = setTimeout(() => {
      dispatch(setHoveredId(null));
      // dispatch(setPosition(null))
    }, 200)
    setTimeoutId(newTimeout)
  };

  const handleMoreInfo = (e, id) => {
    //we have to send the coordinates....for cardPopUp2...
    // if (timeoutId) clearTimeout(timeoutId)
    // e.stopPropagation()
    // setIsClick(true)
    setShowPopUp(id)
    // setTest(id)
    setTimeout(() => {
      //  dispatch(setHoveredId(null))//hide the popup1 // dispatch(setHoveredId(null))//programitcally , running handleMouseLeave , to make first popUp invisible
      //  dispatch(setHoveredId(null));
    }, 1000)



  }

  if (!img) {
    return null
  }

  return (
    <div className='w-55  shrink-0 relative card cursor-pointer '>
      {
        hoveredId !== id &&
        (<div className='w-55 h-auto  rounded-lg  ' onMouseEnter={(event) => handleMouseEnter(event, id)} onMouseLeave={handleMouseLeave} >
          <img className='w-full h-30 object-cover object-center rounded-lg' src={TMDB_BASE_URL + img} />
        </div>)}

      {hoveredId === id && (<ModalPortal>
        <CardPopUp title={title} img={img} handleMouseLeave={handleMouseLeave} popularity={popularity} id={id} handleMoreInfo={handleMoreInfo} />
      </ModalPortal>)}

      {showPopUp === id && (<ModalPortal>
        <CardPopUp2 setShowPopUp={setShowPopUp} showPopUp={showPopUp} img={img} description={description} title={title} id={id} />
      </ModalPortal>)}
      {/* {
        showPopUp===id && (<ModalPortal><div className='bg-white w-52 h-50 fixed inset-0 animate-growPop z-100'></div></ModalPortal>)
      } */}
    </div>
  )
}

export default MovieCard